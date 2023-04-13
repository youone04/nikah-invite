
export default (db , DataTypes) => {
    const Theme = db.define("theme", {
        top_left_p1 : {
            type: DataTypes.INTEGER
        },
        top_right_p1 : {
            type: DataTypes.STRING,
        },
        frame_p1 : {
            type: DataTypes.INTEGER
        },
        bottom_left_p1 : {
            type: DataTypes.INTEGER
        },
        bottom_right_p1 : {
            type: DataTypes.STRING,
        },
        backgorund_image_p2 : {
            type: DataTypes.STRING,
        },
        bottom_left_p2 : {
            type: DataTypes.INTEGER
        },
        bottom_right_p2 : {
            type: DataTypes.STRING,
        },
        
    },{
        freezeTableName: true
    });

    return Theme;
}
// https://indoinvite.com/s/1952/justin-sisca/32?kpd=Bapak%20Budi