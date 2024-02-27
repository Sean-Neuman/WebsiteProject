import { Octokit, App } from "octokit"


export default async function getAllGit() {
    const octokit = new Octokit({
        auth: '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'
    })
  
    const res = await octokit.request('GET /user', {
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     console.log(res)
    //     throw new Error('Failed to fetch data')

    // }
 
    return res
}