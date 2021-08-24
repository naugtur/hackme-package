const isCI = require("@npmcli/ci-detect")()
if (isCI) {

    banner(' + DANGER + ')
    console.log(`
    
    Your pipeline is running thirdparty code, probably unnecessarily. 
    You should run your npm or yarn with the --ignore-scripts switch in CI.
    Check here for more details: https://naugtur.pl/postinstall-security/
    
    A malicious script might steal values from these variables:
    ${listInterestingEnv()}
    
    But that's not all - did you know at this point this package could have added code 
      to your application before it's built and that code would end up in production?
    
    `)
    banner(' + DANGER + ')
    process.exit(112)
} 


function listInterestingEnv() {
    const interesting = ['pass', 'key', 'token', 'git', 'deploy', 'auth', 'cred', 'client', 'secret']
    return Object.keys(process.env).filter(name => interesting.some(i => name.toLocaleLowerCase().includes(i))).join(', ')
}

function banner(text) {
    text.split('').map(c => c.repeat(20).split('').join('   ')).map(a => console.log(a))
}
