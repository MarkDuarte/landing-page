import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>
          <h2
            className="font-sans text-gray-100 text-balance text-heading-xl"
          >
            Crie uma loja online e inicie as suas vendas ainda hoje
          </h2>
          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
