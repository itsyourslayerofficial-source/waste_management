import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, TooltipProps } from "recharts";

interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: any;
}

interface AnalyticsChartProps {
  title: string;
  data: ChartDataPoint[];
  type?: "line" | "bar";
  dataKey?: string;
  color?: string;
  height?: number;
}

const AnalyticsChart = ({ 
  title, 
  data, 
  type = "line", 
  dataKey = "value", 
  color = "hsl(var(--primary))",
  height = 300 
}: AnalyticsChartProps) => {
  return (
    <Card className="card-gradient border-0 shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          {type === "line" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].name}: {payload[0].value}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={3}
                dot={{ fill: color, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                        <p className="text-sm font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].name}: {payload[0].value}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey={dataKey}
                fill={color}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;