import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context){const posts=await getCollection('articulos',({data})=>data.draft!==true);return rss({title:'Ahorrasol',description:'Energía solar y ahorro energético en el hogar.',site:context.site,items:posts.map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.date,link:`/articulos/${p.data.slug}/` })),customData:'<language>es</language>'});}
