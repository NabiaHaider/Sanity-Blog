
import { defineType,defineField,defineArrayMember } from "sanity"

export const post = defineType({
    name:'post',
    type:'document',
    title:'Post',
    fields:[
        defineField(
        {
            name:'title',
            type:'string',
            title:'Post Title',
            description:'Title of the post',
            validation:Rule => Rule.required(), 
        }),

        //slug field
        defineField(
            {
                name:'slug',
                type:'slug',
                title:'Slug',
                options:{
                    source:'title',
                    maxLength:96
                },
                validation:Rule => Rule.required()
            },
        ),
        defineField(
            {
            name:'summary',
            type:'text',
            title:'Summary',
            validation:Rule => Rule.required()
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true //help to crop the image
            }
        }),
        defineField({
            name:'content',
            type:'array',
            title:'Content',
            of:[
                defineArrayMember({
                    type:'block'
                })
            ]
        }),
        defineField({
            name:'author',
            type:'reference',//give reference that we donot need to create new author
            title:'Author',
            to:[{
                type:'author'
            }]
        })

       //  IF YOU WANT TO ADD GENDER SO YOU CAN ADD THIS THIS IS FOR LEARNING
        // {
        //     name:'gender',
        //     type:'string',
        //     title:'gender',
        //     options:{
        //         list:[
        //             {title:'male',value:'male'},
        //             {title:'female',value:'female'}
        //         ],
        //         layout:'radio',//circle which is filled when we select
        //         direction:'horizontal'//only done when layout is radio
        //     }
        // }


    ]
}
)

// import {DocumentTextIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// export const postType = defineType({
//   name: 'post',
//   title: 'Post',
//   type: 'document',
//   icon: DocumentTextIcon,
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//       },
//     }),
//     defineField({
//       name: 'author',
//       type: 'reference',
//       title: 'Author',
//       to: {type: 'author'},
//     }),
//     defineField({
//       name: 'mainImage',
//       type: 'image',
//       title:'Image',
//       options: {
//         hotspot: true,
//       },
      
//       fields: [
//         {
//           name: 'alt',
//           type: 'string',
//           title: 'Alternative text',
//         }
//       ]
//     }),

//     defineField({
//       name: 'summary',
//       type: 'text',
//       title: 'Summary',
//      }),
//      defineField({
//       name: 'content',
//       type: 'array',
//       title: 'Content',
//       of:[
//           defineArrayMember({
//               type: 'block',
//           })
//       ]
//      })
    // defineField({
    //   name: 'categories',
    //   type: 'array',
    //   of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    // }),
    // defineField({
    //   name: 'publishedAt',
    //   type: 'datetime',
    // }),
    // defineField({
    //   name: 'body',
    //   type: 'blockContent',
    // }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//       author: 'author.name',
//       media: 'mainImage',
//     },
//     prepare(selection) {
//       const {author} = selection
//       return {...selection, subtitle: author && `by ${author}`}
//     },
//   },
// })
