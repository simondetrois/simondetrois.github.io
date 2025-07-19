---
title: networking
---

## Ingress
- An [**Ingress**](https://kubernetes.io/docs/concepts/services-networking/ingress/) is the resource which defines the routing rules. That is, which external traffic routes to which internal service.
- An [**IngressController**](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) is the software required to interpret and implement those ingress rules. Kubernetes does not come with an Ingress Controller out of the box, so one must be installed in order to use the Ingress resource.
