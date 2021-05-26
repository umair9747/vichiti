function lookup(){
    const { spawn } = require('child_process');
    const ls = spawn('./functions/finduser.sh');
    var align = require('align-text');

    ls.stdout.on('data', (data) => {
    console.log(align(`${data}`, 5));
    });

    ls.stderr.on('data', (data) => {
    console.error(`${data}`);
    });
    
    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
}

module.exports = {lookup};