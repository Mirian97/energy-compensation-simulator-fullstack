"use client";
import { ChipStatus } from "@/app/_components/chip-status";
import { Button } from "@/app/_components/ui/button";
import { DataTable } from "@/app/_components/ui/datatable";
import useLeadDetail from "@/app/_hooks/useLeadDetail";
import {
  ArrowLeft,
  Calendar,
  Lightbulb,
  Mail,
  Phone,
  User,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { consumoColumns } from "./_components/consume-columns";

const Detalhes = () => {
  const router = useRouter();
  const { data, isLoading } = useLeadDetail();
  const unidadeConsumidora = data?.unidades?.[0];

  return (
    <div className="bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="mx-auto max-w-5xl space-y-6">
        <Button
          variant="outline"
          onClick={() => router.push("/listagem")}
          className="flex w-fit items-center gap-2"
        >
          <ArrowLeft size={16} />
          Voltar
        </Button>
        <div className="animate-fadeIn overflow-hidden rounded-xl border border-blue-100 bg-white/80 shadow-lg backdrop-blur-lg">
          <div className="flex flex-col gap-4 bg-gradient-to-r from-primary via-orange-400 to-secondary p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">
                {data?.nomeCompleto}
              </h1>
              <div className="mt-1 flex items-center text-white/90">
                <Calendar size={16} className="mr-1" />
                <span className="text-sm font-medium">
                  {data?.createdAt
                    ? new Date(data?.createdAt).toLocaleDateString("pt-BR")
                    : "-"}
                </span>
              </div>
            </div>
            <ChipStatus>Em análise</ChipStatus>
          </div>
          <div className="flex flex-col gap-8 p-6 px-4 md:flex-row md:px-8">
            <div className="w-full space-y-10 md:w-1/2">
              <div>
                <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
                  <User className="mr-2 text-primary" size={20} />
                  Informações do Cliente
                </h2>
                <div className="ml-1 space-y-5 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Mail className="mr-2.5 mt-0.5 text-gray-500" size={16} />
                    <p>{data?.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2.5 mt-0.5 text-gray-500" size={16} />
                    <p>{data?.telefone}</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
                  <Zap className="mr-2 text-primary" size={20} />
                  Dados de Energia
                </h2>
                <div className="space-y-5 text-gray-700">
                  <div className="ml-1 flex flex-col gap-1.5 text-sm">
                    <span className="font-semibold">Código UC</span>
                    <span className="ml-2 font-medium">
                      {unidadeConsumidora?.codigoDaUnidadeConsumidora}
                    </span>
                  </div>
                  <div className="ml-1 flex flex-col gap-1.5 text-sm">
                    <span className="font-semibold">Modelo Fásico</span>
                    <span className="ml-2 font-medium">
                      {unidadeConsumidora?.modeloFasico}
                    </span>
                  </div>
                  <div className="ml-1 flex flex-col gap-1.5 text-sm">
                    <span className="font-semibold">Enquadramento</span>
                    <span className="ml-2 font-medium">
                      {unidadeConsumidora?.enquadramento}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 flex items-center text-xl font-bold text-gray-800">
                <Lightbulb className="mr-2 text-primary" size={20} />
                Consumo
              </h2>
              <DataTable
                data={unidadeConsumidora?.historicoDeConsumoEmKWH || []}
                columns={consumoColumns}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
