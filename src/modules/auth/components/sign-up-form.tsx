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

export default function SignUpForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Cadastro</CardTitle>
        <CardDescription>
          Preencha os campos a baixo para criar conta.
        </CardDescription>
      </CardHeader>
      <form action={AuthActions.createAccount}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">Nome</label>
              <input id="name" name="name" required />
            </div>
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
          <Button type="submit">Criar conta</Button>
          <Link
            href="/portal/login"
            className={buttonVariants({ variant: "link" })}
          >
            Já tem uma conta? Acesse aqui
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
