"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Tag } from "lucide-react";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  featured: boolean;
}

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleDetailModal({
  article,
  onClose,
}: ArticleDetailModalProps) {
  if (!article) return null;

  return (
    <Dialog open={!!article} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0">
        <div className="relative w-full h-96">
          <Image
            src={article.image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8">
            <DialogTitle className="text-3xl font-bold text-white mb-2">
              {article.title}
            </DialogTitle>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              <Badge
                className={`${
                  article.category === "Formation"
                    ? "bg-emerald-100 text-emerald-800"
                    : article.category === "Action Sociale"
                    ? "bg-orange-100 text-orange-800"
                    : article.category === "Équipement"
                    ? "bg-purple-100 text-purple-800"
                    : article.category === "Santé Publique"
                    ? "bg-red-100 text-red-800"
                    : article.category === "Partenariat"
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {article.category}
              </Badge>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: article.content.replace(/\n/g, "<br />"),
            }}
          ></div>
        </div>
        <DialogFooter className="p-8 pt-0">
          <Button onClick={onClose} variant="outline">
            Fermer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
