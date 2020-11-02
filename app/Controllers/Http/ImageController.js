'use strict'

const Helpers = use('Helpers');
const Image = use("App/Models/Image");

class ImageController {
    async upload({ request }) {
        const profilePic = request.file('img1', 'img2', {
            types: ['image'],
            size: '2mb'
        })

        // await profilePic.move(Helpers.tmpPath('uploads'), (file) => {
        //     return {
        //         name: `${new Date().getTime()}.${file.subtype}`
        //     }
        // })

        await profilePic.move(Helpers.tmpPath('uploads'), {
            name: 'img.jpg',
            overwrite: true
        })

        if (!profilePic.moved()) {
            return profilePic.error()
        }
        return 'File moved'
    }
}

module.exports = ImageController
