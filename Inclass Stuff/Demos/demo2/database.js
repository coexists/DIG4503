const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://victorialeon:bqHdsALi2P2p7fLG@cluster0-tc9sb.mongodb.net/";

class Database {
    constructor() {

            this.collection = null;
            this.connection = null;

        MongoClient.connect(URL, (error, connection) => {

            if(error) {
                throw error;
                }   

            this.connection = connection;
          
        
            let database = connection.db("DIG4503-78");
            this.collection = database.collection("Movies");
        
        });
    }

        findScore(score) {

        if(this.collection != null) {this.collection.findOne({
            "score": score
        }, {}, (error, result) => {
                return result;
        });
    } else {
        return null;
    }

    }
}

module.exports = Database;