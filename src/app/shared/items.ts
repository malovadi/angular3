//import { Item } from './item';
/*export const ITEMS: Item[] = [
  {
    id: '0',
    name: 'Item A-1',
    image: 'assets/images/A/A-1.png',
    category: 'A',
    featured: true,
    label: 'L-1',
    price: '12.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
  comments: [
    {
      rating: 5,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'Happy customer',
      date: '2021-10-18T15:33:33.134792Z',
    },
    {
      rating: 4,
      comment:
        'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
      author: 'Someone else',
      date: '2021-10-18T15:33:33.134792Z',
    },
    {
      rating: 3,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
      author: 'Happy customer',
      date: '2021-10-18T15:33:33.134792Z',
    },
    {
      rating: 5,
      comment:
        'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
      author: 'Someone else',
      date: '2021-10-18T15:33:33.134792Z',
    },
    {
      rating: 5,
      comment:
        'In blandit tincidunt risus, ut hendrerit metus.',
      author: 'Someone else',
      date: '2021-10-18T15:33:33.134792Z',
    },
  ],
  },
  {
    id: '1',
    name: 'Item A-2',
    image: 'assets/images/A/A-2.png',
    category: 'A',
    featured: true,
    label: 'L-2',
    price: '3.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    comments: [
      {
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Praesent non ligula in quam pellentesque mattis.',
        author: 'Just customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 4,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2020-12-18T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
    ],
  },
  {
    id: '2',
    name: 'Item B-1',
    image: 'assets/images/B/B-1.png',
    category: 'B',
    featured: true,
    label: 'L-3',
    price: '5.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    comments: [
      {
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Praesent non ligula in quam pellentesque mattis.',
        author: 'Just customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Praesent non ligula in quam pellentesque mattis.',
        author: 'customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 4,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2020-12-11T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
    ],
  },
  {
    id: '3',
    name: 'Item B-2',
    image: 'assets/images/B/B-2.png',
    category: 'B',
    featured: true,
    label: 'L-4',
    price: '1.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    comments: [
      {
        rating: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
      {
        rating: 1,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 2,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
    ],
  },
  {
    id: '4',
    name: 'Item C-1',
    image: 'assets/images/C/C-1.png',
    category: 'C',
    featured: false,
    label: 'L-5',
    price: '10.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    comments: [
      {
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 5,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 5,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
      {
        rating: 2,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus.',
        author: 'Someone else',
        date: '2020-11-28T18:33:33.134792Z',
      },
    ],
  },
  {
    id: '5',
    name: 'Item C-2',
    image: 'assets/images/C/C-2.png',
    category: 'C',
    featured: false,
    label: 'L-6',
    price: '20.99',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Sed vitae sem id massa pellentesque lacinia eget vitae lacus.',
    comments: [
      {
        rating: 5,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Happy customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 4,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 2,
        comment:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non ligula in quam pellentesque mattis. Praesent non ligula in quam pellentesque mattis.',
        author: 'customer',
        date: '2021-10-18T15:33:33.134792Z',
      },
      {
        rating: 4,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2020-12-11T15:33:33.134792Z',
      },
      {
        rating: 3,
        comment:
          'In blandit tincidunt risus, ut hendrerit metus ullamcorper at.',
        author: 'Someone else',
        date: '2021-10-18T18:33:33.134792Z',
      },
    ],
  },
];
*/
