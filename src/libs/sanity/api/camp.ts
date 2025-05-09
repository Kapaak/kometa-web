import { groq } from 'next-sanity';
import { SanityCamps } from '~/domains';
import { client } from '../config';

export async function getCamps(): Promise<SanityCamps[]> {
  const queryCamps = groq`*[_type == "camp"]{"id":_id,name,"alt":image.alt,image{asset->{...,metadata}},url,"tags":tag}[]`;

  const course: SanityCamps[] = await client.fetch(queryCamps);

  return course;
}
