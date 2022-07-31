export default {
    name: 'Exclusive',
    title: 'Exclusive',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'cate',
            title: 'Cate',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'meta_desc',
            title: 'Meta Description',
            type: 'string',
        },
        {
            name: 'img_url',
            title: 'Image Url',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'localeBlockContent',
        },
    ]
}