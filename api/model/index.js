const Profile = require("./profile");
const Activity = require("./activities");
const Country = require("./countries");
const LocalUser = require("./localUser");
const ExternalUser = require("./externalUser");

LocalUser.hasOne(Profile, { foreignKey: "idLocalUser" });
Profile.belongsTo(LocalUser, { foreignKey: "idLocalUser" });
ExternalUser.hasOne(Profile, { foreignKey: "idExternalUser" });
Profile.belongsTo(ExternalUser, { foreignKey: "idExternalUser" });
Activity.belongsToMany(Country, { through: "activities_countries" });
Country.belongsToMany(Activity, { through: "activities_countries" });

module.exports = {Profile, Activity, Country, LocalUser, ExternalUser}
