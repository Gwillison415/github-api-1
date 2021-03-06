/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
const sinon = require('sinon');
const root = require('../src/resolvers/RootResolver');
const User = require('../src/models/User');

describe('RootResolver model', () => {
  xit('should be a function', () => {
    expect(root.gitData).to.be.a('function');
  });

  it('should return a new User model', () => {
    const user = new User({ name: 'michaelmurray6298' });
    sinon.stub(user, 'orgs').get(() => ({
      org: {
        login: 'gSchool',
        id: 3484345,
        url: 'https://api.github.com/orgs/gSchool',
        repos_url: 'https://api.github.com/orgs/gSchool/repos',
        events_url: 'https://api.github.com/orgs/gSchool/events',
        hooks_url: 'https://api.github.com/orgs/gSchool/hooks',
        issues_url: 'https://api.github.com/orgs/gSchool/issues',
        members_url: 'https://api.github.com/orgs/gSchool/members{/member}',
        public_members_url:
     'https://api.github.com/orgs/gSchool/public_members{/member}',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3484345?v=4',
        description: 'Home of all the Galvanize education repositories',
      },
      login: 'gSchool',
      id: 3484345,
      url: 'https://api.github.com/orgs/gSchool',
      userRepos: [Function],
    }));
    sinon.stub(user, 'userRepos').get(() => ({
      repo: {
        id: 98671137,
        name: 'databraid-api-starter',
        full_name: 'michaelmurray6298/databraid-api-starter',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        description: null,
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/deployments',
        created_at: '2017-07-28T17:13:20Z',
        updated_at: '2017-07-28T17:13:21Z',
        pushed_at: '2017-07-27T20:16:40Z',
        git_url: 'git://github.com/michaelmurray6298/databraid-api-starter.git',
        ssh_url: 'git@github.com:michaelmurray6298/databraid-api-starter.git',
        clone_url:
     'https://github.com/michaelmurray6298/databraid-api-starter.git',
        svn_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        homepage: null,
        size: 33,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: { admin: true, push: true, pull: true },
      },
      name: 'databraid-api-starter',
      id: 98671137,
      openIssues: 0,
      issue: [Function],
      pullRequest: [Function],
      milestone: [Function],
    }));

    expect(user.orgs).to.deep.equal({
      org: {
        login: 'gSchool',
        id: 3484345,
        url: 'https://api.github.com/orgs/gSchool',
        repos_url: 'https://api.github.com/orgs/gSchool/repos',
        events_url: 'https://api.github.com/orgs/gSchool/events',
        hooks_url: 'https://api.github.com/orgs/gSchool/hooks',
        issues_url: 'https://api.github.com/orgs/gSchool/issues',
        members_url: 'https://api.github.com/orgs/gSchool/members{/member}',
        public_members_url:
     'https://api.github.com/orgs/gSchool/public_members{/member}',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3484345?v=4',
        description: 'Home of all the Galvanize education repositories',
      },
      login: 'gSchool',
      id: 3484345,
      url: 'https://api.github.com/orgs/gSchool',
      userRepos: [Function],
    });

    expect(user.userRepos).to.deep.equal({
      repo: {
        id: 98671137,
        name: 'databraid-api-starter',
        full_name: 'michaelmurray6298/databraid-api-starter',
        owner: {
          login: 'michaelmurray6298',
          id: 24865792,
          avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/michaelmurray6298',
          html_url: 'https://github.com/michaelmurray6298',
          followers_url:
      'https://api.github.com/users/michaelmurray6298/followers',
          following_url:
      'https://api.github.com/users/michaelmurray6298/following{/other_user}',
          gists_url:
      'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
          starred_url:
      'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
          subscriptions_url:
      'https://api.github.com/users/michaelmurray6298/subscriptions',
          organizations_url:
      'https://api.github.com/users/michaelmurray6298/orgs',
          repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
          events_url:
      'https://api.github.com/users/michaelmurray6298/events{/privacy}',
          received_events_url:
      'https://api.github.com/users/michaelmurray6298/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        description: null,
        fork: true,
        url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter',
        forks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/forks',
        keys_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/keys{/key_id}',
        collaborators_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/collaborators{/collaborator}',
        teams_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/teams',
        hooks_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/hooks',
        issue_events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/events{/number}',
        events_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/events',
        assignees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/assignees{/user}',
        branches_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/branches{/branch}',
        tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/tags',
        blobs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/blobs{/sha}',
        git_tags_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/tags{/sha}',
        git_refs_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/refs{/sha}',
        trees_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/trees{/sha}',
        statuses_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/statuses/{sha}',
        languages_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/languages',
        stargazers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/stargazers',
        contributors_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contributors',
        subscribers_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscribers',
        subscription_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/subscription',
        commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/commits{/sha}',
        git_commits_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/git/commits{/sha}',
        comments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/comments{/number}',
        issue_comment_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues/comments{/number}',
        contents_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/contents/{+path}',
        compare_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/compare/{base}...{head}',
        merges_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/merges',
        archive_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/{archive_format}{/ref}',
        downloads_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/downloads',
        issues_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/issues{/number}',
        pulls_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/pulls{/number}',
        milestones_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/milestones{/number}',
        notifications_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/notifications{?since,all,participating}',
        labels_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/labels{/name}',
        releases_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/releases{/id}',
        deployments_url:
     'https://api.github.com/repos/michaelmurray6298/databraid-api-starter/deployments',
        created_at: '2017-07-28T17:13:20Z',
        updated_at: '2017-07-28T17:13:21Z',
        pushed_at: '2017-07-27T20:16:40Z',
        git_url: 'git://github.com/michaelmurray6298/databraid-api-starter.git',
        ssh_url: 'git@github.com:michaelmurray6298/databraid-api-starter.git',
        clone_url:
     'https://github.com/michaelmurray6298/databraid-api-starter.git',
        svn_url: 'https://github.com/michaelmurray6298/databraid-api-starter',
        homepage: null,
        size: 33,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        open_issues_count: 0,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        permissions: { admin: true, push: true, pull: true },
      },
      name: 'databraid-api-starter',
      id: 98671137,
      openIssues: 0,
      issue: [Function],
      pullRequest: [Function],
      milestone: [Function],
    });
  });
});
