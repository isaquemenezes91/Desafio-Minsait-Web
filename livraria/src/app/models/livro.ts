import { AutorDto} from "./autorDto"


export interface Livro {
  id:number;
  titulo: string;
  subtitulo:string;
  resumo: string;
  quantidadePaginas: number;
  dataPublicacao:string;
  edicao:number;
  editora:string;
  autores: string;
  quantidadeEstoque:number;

}
