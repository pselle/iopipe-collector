Serverless Stack tracing & telemetry daemon
-------------------------------------------

For the open collection and access of tracing data from
serverless applications into ELK with a Logstash HTTP listener.

Collects data from our reference reporting agent:
[IOpipe-agent-node](https://github.com/iopipe/iopipe-agent-node).

Post data to /event as application/json.

![Serverless
Kibana Graphs](https://s3.amazonaws.com/web-static-data/kibana-iopipe-collector.png)

Configuration
-------------

Set environment variables:

 - LISTEN_PORT (default: 80)
 - LOGSTASH_HOST (default: https://localhost)

Install & Deploy with Docker
----------------------------

We provide an official build of this project at `iopipe/collector`.

To run our image:

```
docker run -e LOGSTASH_HOST=http://example.com -d iopipe/collector
```

Production users will likely deploy this with Kubernetes
as a ReplicationController, or under Docker Swarm as a
Service.


Building
------------

Build as a Docker image:

```
docker build -t iopipe-telemetry-api .
```

LICENSE
-------

Apache 2.0
