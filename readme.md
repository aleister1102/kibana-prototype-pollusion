# CVE-2019-7609

> Kibana versions before 5.6.15 and 6.6.1 contain an arbitrary code execution flaw in the Timelion visualizer. An attacker with access to the Timelion application could send a request that will attempt to execute javascript code. This could possibly lead to an attacker executing arbitrary commands with permissions of the Kibana process on the host system.

CVSS:

![cvss](cvss.png)

Blog: https://research.securitum.com/prototype-pollution-rce-kibana-cve-2019-7609/

Payload: https://github.com/mpgn/CVE-2019-7609

## Environment Setup

- Docker: https://www.elastic.co/guide/en/kibana/8.14/docker.html
- [Docker Compose](docker-compose.yml)
- Kibana: https://www.elastic.co/guide/en/kibana/current/development-getting-started.html

## Analysis

- `NODE_OPTIONS`: https://nodejs.org/api/cli.html#node_optionsoptions
- `child_process.spawn`: https://nodejs.org/api/child_process.html#child_processspawncommand-args-options