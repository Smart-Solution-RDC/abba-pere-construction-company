"use client";
import { useState } from "react";
import { signin } from "../../actions/auth";
import { FormData } from "@/lib/definitions";

export default function UsersPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(form)
  };

  return (
    <div>
      <h1>Users</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />{" "}
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />{" "}
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
