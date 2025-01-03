import {defineType,defineField,defineArrayMember} from 'sanity'

export const Blog = defineType( {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
       defineField({
            name: 'title',
            type: 'string',
            title: 'Post Title',
            description: 'Title of the post',
           validation: Rule => Rule.required(),
        }),

        //slug field

        defineField({
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: 'title',
            maxLength: 96, 
          },
          validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
           }),
       defineField({
        name: 'summary',
        type: 'text',
        title: 'Summary',
       }),
       defineField({
        name: 'content',
        type: 'array',
        title: 'Content',
        of:[
            defineArrayMember({
                type: 'block',
            })
        ]
       })
      
        // {
        //     name: 'gender',
        //     type: 'string',
        //     title: 'Gender',
        //     options: {
        //         list: [
        //             {title:'Male', value:'male'},
        //             {title:'Female', value:'female'},
        //         ],
        //         layout:'radio',
        //         direction:'horizontal',
        //     }
        // }
    ]
}
)