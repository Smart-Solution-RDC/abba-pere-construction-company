"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

interface ChartData {
  mois?: string;
  ventes?: number;
  commandes?: number;
  nom?: string;
  valeur?: number;
  couleur?: string;
}

interface BarChartComponentProps {
  data: ChartData[];
  dataKey: string;
  color?: string;
  height?: number;
}

export function BarChartComponent({
  data,
  dataKey,
  color = "#155E75",
  height = 300,
}: BarChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mois" />
        <YAxis />
        <Tooltip
          formatter={(value: number) => [
            dataKey === "ventes"
              ? `${value.toLocaleString()} CDF`
              : value.toString(),
            dataKey === "ventes" ? "Ventes" : "Commandes",
          ]}
        />
        <Bar dataKey={dataKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}

interface PieChartComponentProps {
  data: ChartData[];
  height?: number;
}

export function PieChartComponent({
  data,
  height = 300,
}: PieChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="valeur"
          label={({ nom, valeur }) => `${nom}: ${valeur}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.couleur || "#155E75"} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

interface LineChartComponentProps {
  data: ChartData[];
  dataKey: string;
  color?: string;
  height?: number;
}

export function LineChartComponent({
  data,
  dataKey,
  color = "#155E75",
  height = 300,
}: LineChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mois" />
        <YAxis />
        <Tooltip
          formatter={(value: number) => [
            dataKey === "ventes"
              ? `${value.toLocaleString()} CDF`
              : value.toString(),
            dataKey === "ventes" ? "Ventes" : "Commandes",
          ]}
        />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={color}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
