import { defineType,defineField } from "sanity";

export const author =({
    name:'author',
    type:'document',
    title:'Author',
    fields:[
        defineField({
            name:'name',
            type:'string',
            title:'AuthorName'
        }),
        defineField({
            name:'bio',
            type:'text',
            title:'Bio'
        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
            options:{
                hotspot:true //help to crop the image
            }
        }),
    ]
})

// import {UserIcon} from '@sanity/icons'
// import {defineArrayMember, defineField, defineType} from 'sanity'

// export const author = defineType({
//   name: 'author',
//   title: 'Author',
//   type: 'document',
//   icon: UserIcon,
//   fields: [
//     defineField({
//       name: 'name',
//       type: 'string',
//       title: 'AuthorName',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//       },
//     }),
//     defineField({
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//       options: {
//         hotspot: true,
//       },
//     }),
//     defineField({
//       name: 'bio',
//       type: 'array',
//       title: 'Bio',
//       of: [
//         defineArrayMember({
//           type: 'block',
//           styles: [{title: 'Normal', value: 'normal'}],
//           lists: [],
//         }),
//       ],
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'name',
//       media: 'image',
//     },
//   },
// })
