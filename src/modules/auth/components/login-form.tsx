import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import AuthActions from "../actions/auth-actions";

export default function LoginForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Faça login para acessar o portal.</CardDescription>
      </CardHeader>
      <form action={AuthActions.login}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" type="password" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Entrar</Button>
          <Link
            href="/portal/cadastro"
            className={buttonVariants({ variant: "link" })}
          >
            Criar conta
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
