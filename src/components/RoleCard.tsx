import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  buttonText: string;
  href: string;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

const RoleCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  buttonText, 
  href, 
  variant = "default",
  className 
}: RoleCardProps) => {
  const cardVariants = {
    default: "hover-lift card-gradient border-0 shadow-md",
    primary: "hover-lift bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-lg",
    accent: "hover-lift bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-lg"
  };

  const iconVariants = {
    default: "bg-primary/10 text-primary",
    primary: "bg-primary/20 text-primary",
    accent: "bg-accent/20 text-accent"
  };

  const buttonVariants = {
    default: "hero",
    primary: "hero",
    accent: "accent"
  };

  return (
    <Card className={cn(cardVariants[variant], className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className={cn("p-3 rounded-lg", iconVariants[variant])}>
            {icon}
          </div>
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          variant={buttonVariants[variant] as any} 
          className="w-full group"
          onClick={() => window.location.href = href}
        >
          {buttonText}
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoleCard;