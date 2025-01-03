import { type SchemaTypeDefinition } from 'sanity'


import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {post} from './post'
import {author} from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, post, author],
}
