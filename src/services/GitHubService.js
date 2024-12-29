const headers = {};
headers["Accept"] = "application/vnd.github.v3+json";

export async function getRepoData(repoUrl) {
  const repoPath = repoUrl.replace("https://github.com/", "");
  const apiUrl = `https://api.github.com/repos/${repoPath}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching repo data:", error);
    return null;
  }
}

export async function getRepoContributors(repoUrl) {
  try{
    const response = await fetch(repoUrl, {
      method: 'GET',
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getRepoIssues(repoUrl) {
  const apiUrl = repoUrl.replace("{/number}", ""); 
  try{
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function getLanguages(repoUrl) {
  try{
    const response = await fetch(repoUrl, {
      method: 'GET',
      headers: headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
