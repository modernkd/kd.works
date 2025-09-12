import type * as Party from "partykit/server";

interface User {
  id: string;
  name: string;
}

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  users: Map<string, User> = new Map();

  onConnect(conn: Party.Connection, ctx: Party.ConnectionContext) {
    console.log(
      `Connected:
  id: ${conn.id}
  room: ${this.room.id}`
    );
  }

  onMessage(message: string, sender: Party.Connection) {
    try {
      const data = JSON.parse(message);
      if (data.type === "join") {
        this.users.set(sender.id, { id: sender.id, name: data.name });
        console.log(`${data.name} joined room ${this.room.id}`);
        // Broadcast user joined to all
        this.room.broadcast(
          JSON.stringify({
            type: "userJoined",
            user: { id: sender.id, name: data.name },
          })
        );
      } else if (data.type === "sound") {
        const user = this.users.get(sender.id);
        if (user) {
          console.log(`${user.name} played sound: ${data.emoji}`);
          // Broadcast sound event
          this.room.broadcast(
            JSON.stringify({
              type: "soundPlayed",
              user: user,
              emoji: data.emoji,
              sound: data.sound,
            })
          );
        }
      }
    } catch (e) {
      console.error("Invalid message:", message);
    }
  }

  onClose(conn: Party.Connection) {
    const user = this.users.get(conn.id);
    if (user) {
      this.users.delete(conn.id);
      console.log(`${user.name} left room ${this.room.id}`);
      // Broadcast user left
      this.room.broadcast(
        JSON.stringify({
          type: "userLeft",
          user: user,
        })
      );
    }
  }
}

Server satisfies Party.Worker;
