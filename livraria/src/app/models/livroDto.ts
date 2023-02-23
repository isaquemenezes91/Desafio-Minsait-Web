import { AutorDto } from "./autorDto"

export interface LivroDto{
  id:string|number;
  titulo: string;
  subtitulo: string;
  resumo: string;
  quantidadePaginas: number;
  dataPublicacao: string;
  edicao: number;
  quantidadeEstoque: number;
  editora: string;
  autores: [AutorDto];
}
