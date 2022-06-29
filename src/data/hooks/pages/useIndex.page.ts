import { BlogPost } from "../../@types/BlogPostInterface";

export default function useIndex(){
    const posts: BlogPost[] = [
        {
            id: '2',
            slug: 'tipagem-ts',
            title: 'Tipagem no TypeScript',
            description: 'Neste artigo vamos aprender a trabalhar utilizando a tipagem do TypeScript com variáveis, constantes...',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/09/TYPESCRIPT-400x280.png'
        },
        {
            id: '1',
            slug: 'jwt',
            title: 'O que é JWT?',
            description: 'Neste artigo iremos falar sobre o que é, qual a estrutura e onde são utilizados os JSON Web Tokens ou como comumente são conhecidos JWT.',
            picture: 'https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/07/o-que-e-jwt-400x280.png'
        }
    ]
    return {
        posts
    }
}