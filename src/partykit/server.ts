import type * as Party from 'partykit/server';

/**
 * Represents a user connected to a PartyKit room.
 */
interface User {
  /** Unique identifier for the user */
  id: string;
  /** Display name of the user */
  name: string;
}

/**
 * PartyKit server implementation for real-time collaborative sound board functionality.
 * Handles user connections, sound events, and custom sound management.
 */
export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  /** Map of connected users, keyed by their connection ID */
  users: Map<string, User> = new Map();

  /**
   * Called when a new connection is established.
   * Currently empty but structured for future connection handling.
   */
  onConnect() {
    try {
      // Connection handling logic can be added here
    } catch {
      // Error handling for connection issues
    }
  }

  /**
   * Handles incoming messages from connected clients.
   * Processes different message types for room management, sound events, and custom sound operations.
   * @param {string} message - JSON string containing the message data
   * @param {Party.Connection} sender - The connection that sent the message
   */
  async onMessage(message: string, sender: Party.Connection) {
    try {
      const data = JSON.parse(message);

      if (data.type === 'join') {
        // Add user to the room's user list
        this.users.set(sender.id, { id: sender.id, name: data.name });

        // Send existing custom sounds to the new user
        await this.sendExistingCustomSounds(sender);

        // Send current user list to the new user
        sender.send(
          JSON.stringify({
            type: 'usersList',
            users: Array.from(this.users.values()),
          })
        );

        // Notify all other users about the new user
        const joinMsg = JSON.stringify({
          type: 'userJoined',
          user: { id: sender.id, name: data.name },
        });
        for (const conn of this.room.getConnections()) {
          if (conn !== sender) {
            conn.send(joinMsg);
          }
        }
      } else if (data.type === 'sound') {
        // Handle sound play events
        const user = this.users.get(sender.id);
        if (user) {
          // Broadcast sound play to all users in the room
          this.room.broadcast(
            JSON.stringify({
              type: 'soundPlayed',
              user: user,
              emoji: data.emoji,
              sound: data.sound,
            })
          );
        }
      } else if (data.type === 'addCustomSound') {
        // Handle adding custom sounds
        const user = this.users.get(sender.id);
        if (user) {
          // Store the custom sound in room storage
          await this.room.storage.put(`customSound_${data.emoji}`, data.sound);

          // Broadcast the new custom sound to all users
          this.room.broadcast(
            JSON.stringify({
              type: 'customSoundAdded',
              user: user,
              emoji: data.emoji,
              sound: data.sound,
            })
          );
        }
      } else if (data.type === 'deleteCustomSound') {
        // Handle deleting custom sounds
        const user = this.users.get(sender.id);
        if (user && data.emoji) {
          // Remove the custom sound from room storage
          await this.room.storage.delete(`customSound_${data.emoji}`);

          // Broadcast the deletion to all users
          this.room.broadcast(
            JSON.stringify({
              type: 'customSoundDeleted',
              emoji: data.emoji,
            })
          );
        }
      } else if (data.type === 'editCustomSound') {
        // Handle editing custom sounds
        const user = this.users.get(sender.id);
        if (user && data.emoji && data.sound) {
          // Update the custom sound in room storage
          await this.room.storage.put(`customSound_${data.emoji}`, data.sound);

          // Broadcast the update to all users
          this.room.broadcast(
            JSON.stringify({
              type: 'customSoundUpdated',
              user: user,
              emoji: data.emoji,
              sound: data.sound,
            })
          );
        }
      }
    } catch {
      // Silently handle parsing errors or other message processing issues
    }
  }

  /**
   * Sends all existing custom sounds stored in room storage to a specific connection.
   * This ensures new users receive all custom sounds that were added before they joined.
   * @param {Party.Connection} conn - The connection to send the custom sounds to
   */
  async sendExistingCustomSounds(conn: Party.Connection) {
    // Retrieve all keys from room storage
    const keys = await this.room.storage.list();
    for (const [key, value] of keys) {
      // Check if the key represents a custom sound (starts with 'customSound_')
      if (key.startsWith('customSound_')) {
        // Extract the emoji from the key
        const emoji = key.replace('customSound_', '');
        // Send the custom sound data to the connection
        conn.send(
          JSON.stringify({
            type: 'customSoundAdded',
            emoji,
            sound: value,
          })
        );
      }
    }
  }

  /**
   * Handles connection close events.
   * Removes the user from the room and notifies all remaining users.
   * @param {Party.Connection} conn - The connection that was closed
   */
  onClose(conn: Party.Connection) {
    // Find the user associated with the closed connection
    const user = this.users.get(conn.id);
    if (user) {
      // Remove the user from the users map
      this.users.delete(conn.id);

      // Broadcast to all remaining users that this user left
      this.room.broadcast(
        JSON.stringify({
          type: 'userLeft',
          user: user,
        })
      );
    }
  }
}

Server satisfies Party.Worker;
