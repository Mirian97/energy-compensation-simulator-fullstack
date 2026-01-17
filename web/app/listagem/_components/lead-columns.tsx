"use client";
import { ChipStatus } from "@/app/_components/chip-status";
import { Lead } from "@/app/_types/lead.type";
import { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const leadColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "nomeCompleto",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    accessorKey: "unidades",
    header: "Unidade",
    cell: ({ row }) => row.original.unidades?.[0]?.codigoDaUnidadeConsumidora || "-",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: () => <ChipStatus>Em análise</ChipStatus>,
  },
  {
    accessorKey: "details",
    header: () => <div className="text-center">Detalhes</div>,
    cell: ({ row }) => (
      <Link
        href={`/listagem/${row.original.id.toString()}`}
        className="flex flex-row items-center justify-center text-gray-500 gap-1 hover:text-primary"
      >
        <ExternalLink size={16} />
      </Link>
    ),
  },
];
