"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../_config/api";
import { Lead } from "../_types/lead.type";
import { toast } from "../_utils/toast";

const useLeadDetail = () => {
  const params = useParams<{ id: string }>();
  const [data, setData] = useState<Lead | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getLeads = () => {
    setIsLoading(true);
    api
      .get<Lead>(`/lead/${params.id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        toast({
          title: "Houve um erro...",
          text: err?.response?.data?.message || "Recarregue a página",
          icon: "error",
        });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(getLeads, [params.id]);

  return {
    data: data,
    isLoading,
  };
};

export default useLeadDetail;
