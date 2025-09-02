import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, subtitle, icon, trend, className }: StatCardProps) => {
  return (
    <Card className={cn("hover-lift card-gradient border-0 shadow-md", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {trend && (
                <span
                  className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full",
                    trend.isPositive
                      ? "text-success bg-success/10"
                      : "text-destructive bg-destructive/10"
                  )}
                >
                  {trend.isPositive ? "+" : ""}{trend.value}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className="ml-4 p-3 bg-primary/10 rounded-lg">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;