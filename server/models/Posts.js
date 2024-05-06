module.exports = (sequelize, dataTypes) => {
    const posts = sequelize.define("Posts", {
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        body: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })

    return posts
}