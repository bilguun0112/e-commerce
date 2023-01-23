const carData =
    [
        {
            device: 'Speaker',
            itemName: 'Mini speaker',
            id: "1",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '12'
        },
        {
            device: 'Speaker',
            itemName: 'Wireless speaker',
            id: "2",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '22'
        },
        {
            device: 'Speaker',
            itemName: 'Light speaker',
            id: "3",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '45'
        },
        {
            device: 'Speaker',
            itemName: 'Big speaker',
            id: "4",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '99'
        },
        {
            device: 'Speaker',
            itemName: 'Mega sound',
            id: "5",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '75'
        },
        {
            device: 'Speaker',
            itemName: 'Polk audio speaker',
            id: "6",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '199'
        },
        {
            device: 'Speaker',
            itemName: 'LENRUE speaker',
            id: "7",
            img: 'https://cdn.ihomeaudio.com/media/product/images/iBT800B_gradient1.jpg.450x400_q85.jpg',
            price: '12'
        },

        // Laptop
        {

            device: 'Laptop & pc',
            itemName: 'Macbook',
            id: "8",
            img: 'https://cdn.shopify.com/s/files/1/0326/2971/9176/products/apple-macbook-pro-13-intel-i5-8gb-ram-256gb-ssd-laptops-dailysale-237201_400x.jpg?v=1651180161',
            price: '999'

        },
        {

            device: 'Laptop & pc',
            itemName: 'ASUS ROG Strix Scar 15',
            id: "9",
            img: 'https://www.excaliberpc.com/images/777200_1/large.jpg',
            price: '3200'

        },
        {

            device: 'Laptop & pc',
            itemName: 'Macbook Pro',
            id: "10",
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1628621779000',
            price: '1149'

        },
        {

            device: 'Laptop & pc',
            itemName: 'Acer Aspire 3',
            id: "11",
            img: 'https://m.media-amazon.com/images/I/41er+xmrjfS._SS400_.jpg',
            price: '399'

        },
        {

            device: 'Laptop & pc',
            itemName: 'Lenovo IdeaPad',
            id: "12",
            img: 'https://img.computerunivers.net/images/400x400/90859857F0D22A4FF890412D883CD3AA.jpg',
            price: '679'

        },
        {

            device: 'Laptop & pc',
            itemName: 'ASUS VivoBook 14',
            id: "13",
            img: 'https://img.computerunivers.net/images/400x400/90841241FB04EB32959E4D5E91E49638.jpg',
            price: '250'

        },
        {

            device: 'Laptop & pc',
            itemName: 'ASUS TUF Dash 15',
            id: "14",
            img: 'https://www.trippodo.com/678051-medium_default/asus-tuf-dash-f15-fx516pe-hn001w-notebook-396-cm-156-full-hd-intel-core-i7-16-gb-ddr4-sdram-512-gb-ssd-nvidia-geforce.jpg',
            price: '1219'

        },
        // Camera
        {
            device: 'Camera',
            itemName: 'Canon Demo',
            id: "15",
            img: 'https://www.marcotec-shop.com/pub/media/catalog/product/cache/815b290a519d918302a1a2945471f3a8/0/1/01_eos_r6_mark_ii_front_body.jpg',
            price: '185'

        },
        {
            device: 'Camera',
            itemName: 'Canon EOS T7',
            id: "16",
            img: 'https://target.scene7.com/is/image/Target/GUEST_1bf09891-44f5-4992-a411-5c67721b759f',
            price: '549'

        },
        {
            device: 'Camera',
            itemName: 'OLYMPUS Tough TG-6',
            id: "17",
            img: 'https://i.ebayimg.com/images/g/QtIAAOSwWMRdZzRH/s-l400.jpg',
            price: '500'

        },
        {
            device: 'Camera',
            itemName: 'Minolta 20 Mega',
            id: "18",
            img: 'https://images-na.ssl-images-amazon.com/images/I/710vCELdJ%2BL._SS400_.jpg',
            price: '195'

        },
        {
            device: 'Camera',
            itemName: 'Panasonic LUMIX FZ300',
            id: "19",
            img: 'https://i.ebayimg.com/images/g/cNsAAOSw7e5bO-KT/s-l400.jpg',
            price: '500'

        },
        {
            device: 'Camera',
            itemName: 'Panasonic LUMIX FZ400',
            id: "20",
            img: 'https://i.ebayimg.com/images/g/VN4AAOSwhM9jkHVW/s-l400.jpg',
            price: '483'

        },
        {
            device: 'Camera',
            itemName: 'Nikon Z 6II FX Format',
            id: "21",
            img: 'data:image/jpeg;base64,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',
            price: '1499'

        },
        {
            device: 'Camera',
            itemName: 'Sony ZV-1F Vlog camera',
            id: "22",
            img: 'https://i.ebayimg.com/images/g/bU8AAOSwsydi3sHb/s-l400.jpg',
            price: '499'

        },
        {
            device: 'Camera',
            itemName: 'Sony Alpha ZV-E10',
            id: "23",
            img: 'https://www.teds.com.au/media/catalog/product/s/o/sony-zv-e10-lens-black_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=400&canvas=400:400',
            price: '698'

        },
        {
            device: 'Game console',
            itemName: 'Xbox',
            id: "24",
            img: 'https://target.scene7.com/is/image/Target/GUEST_38fe0029-8854-4cde-95f1-ab5d84b68460',
            price: '199'

        },
        {
            device: 'Game console',
            itemName: 'Nintendo Switch',
            id: "25",
            img: 'https://target.scene7.com/is/image/Target/GUEST_af370ab8-b4d7-4bde-854a-7a292c61d577',
            price: '875'

        },
        {
            device: 'Game console',
            itemName: '(PSP) 3000 ',
            id: "26",
            img: 'https://m.media-amazon.com/images/I/31CQEssDbYL.jpg',
            price: '201'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation PS5',
            id: "27",
            img: 'data:image/jpeg;base64,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',
            price: '559'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation Vi-Ta',
            id: "28",
            img: 'https://i.ebayimg.com/images/g/TcwAAOSwo1FgWKIa/s-l400.jpg',
            price: '245'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation Vi-Ta',
            id: "28",
            img: 'https://i.ebayimg.com/images/g/TcwAAOSwo1FgWKIa/s-l400.jpg',
            price: '245'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation Vi-Ta',
            id: "28",
            img: 'https://i.ebayimg.com/images/g/TcwAAOSwo1FgWKIa/s-l400.jpg',
            price: '245'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation Vi-Ta',
            id: "28",
            img: 'https://i.ebayimg.com/images/g/TcwAAOSwo1FgWKIa/s-l400.jpg',
            price: '245'

        },
        {
            device: 'Game console',
            itemName: 'PlayStation 4 Slim',
            id: "29",
            img: 'https://imageio.forbes.com/specials-images/imageserve/57d083a831358e16c5895c36/960x960.jpg?height=400&width=400&fit=bounds',
            price: '399'

        },
    ]

carData.sort(() => Math.random() - 0.5);
export default carData;