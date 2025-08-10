"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", visits: 420, signups: 38 },
  { name: "Tue", visits: 510, signups: 44 },
  { name: "Wed", visits: 480, signups: 39 },
  { name: "Thu", visits: 560, signups: 51 },
  { name: "Fri", visits: 610, signups: 57 },
  { name: "Sat", visits: 390, signups: 31 },
  { name: "Sun", visits: 450, signups: 36 },
];

export default function TrafficArea() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="visits" fillOpacity={0.25} strokeWidth={2} />
        <Area type="monotone" dataKey="signups" fillOpacity={0.25} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
