"use client";
import { Search } from "lucide-react";
import { DebouncedInput } from "../_components/debounced-input";
import { Card } from "../_components/ui/card";
import { DataTable } from "../_components/ui/datatable";
import useLeads from "../_hooks/useLeads";
import { leadColumns } from "./_components/lead-columns";

const Listagem = () => {
  const { data, search, setSearch, isLoading } = useLeads();

  return (
    <Card className="space-y-4 rounded-lg bg-white/80 px-4 pb-6 pt-3 shadow backdrop-blur-sm sm:px-6 md:py-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <h2 className="text-left text-lg font-semibold text-secondary">
          Simulações Realizadas
        </h2>
        <DebouncedInput
          placeholder="Pesquisar..."
          className="max-w-full md:max-w-80"
          value={search}
          onChange={(newValue) => setSearch(newValue)}
          icon={<Search className="size-4" />}
        />
      </div>
      <DataTable columns={leadColumns} data={data} isLoading={isLoading} />
    </Card>
  );
};

export default Listagem;
