Serverless Stack tracing & telemetry daemon
-------------------------------------------

For the open collection and access of tracing data from
serverless applications into ELK with a Logstash HTTP listener.

Collects data from our reference reporting agent:
[IOpipe-agent-node](https://github.com/iopipe/iopipe-agent-node).

Post data to /event as application/json.

Configuration
-------------

Set environment variables:

 - LISTEN_PORT (default: 80)
 - LOGSTASH_HOST (default: https://localhost)

Installation
------------

Build as a Docker image:

```
docker build -t iopipe-telemetry-api .
```

Deploy on Docker:

```
docker run -e LOGSTASH_HOST=http://example.com -d telemetry-api
```

Production users will likely deploy this with Kubernetes
as a ReplicationController, or under Docker Swarm as a
Service.

LICENSE
-------

Apache 2.0
