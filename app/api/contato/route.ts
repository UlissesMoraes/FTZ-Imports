import { NextResponse } from "next/server";

interface ContatoPayload {
  nome?: string;
  telefone?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
}

export async function POST(request: Request) {
  let body: ContatoPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Corpo da requisição inválido." },
      { status: 400 }
    );
  }

  const { nome, telefone, email, assunto, mensagem } = body;

  if (!nome || !mensagem || (!telefone && !email)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Preencha nome, mensagem e ao menos um contato (telefone ou e-mail).",
      },
      { status: 400 }
    );
  }

  console.log("Novo contato FTZ Imports:", {
    nome,
    telefone,
    email,
    assunto,
    mensagem,
  });

  return NextResponse.json({ ok: true });
}
