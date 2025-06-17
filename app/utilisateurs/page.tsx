"use client";
import { fetchUsers } from "@/actions/users";
import { User } from "@/utils/definitions";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Agent } from "../generated/prisma";

export default function Page() {
  
  type Users = Agent[];
  const [users, setUsers] = useState<Users>([]);

  const getUsers = async () => {
    const result = await fetchUsers();
    // if (result instanceof Response) {
      // const data = await result.json();
    console.log(result);

      // console.log(data);
    // } else {
      // setUsers(result);
    // }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
        <ul>
            {users.map((user, index) => (
            <li key={index}>
                <Link href={`utilisateurs/${user.id}`}>{user.id} {user.nom} {user.postnom}</Link>
            </li>
            ))}
        </ul>
    </div>
  );
}
