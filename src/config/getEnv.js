const path = require("path");
const dotEnv = require("dotenv");

module.exports = () => {
  const args = require("yargs")
    .options({
      env: {
        alias: "e",
        describe: "Ambiente do sistema",
        choices: ["testing", "production"],
        demandOption: true
      }
    })
    .help().argv;

    const envFile = dotEnv.config({
        path : `${path.resolve(process.cwd(), '.env', args.env)}`
    });

    if(envFile.error){
        switch(envFile.error.code){
            case 'ENOENT':
                console.error('The .env file is not located, please check if file exists!');
                break;
            default:
                console.error('Can not open the .env file. Check if structure of file have correct format!');
                break;
        }
        process.exit(0)
    }

};
