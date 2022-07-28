---
layout: post
title: An Introduction to Group Theory
permalink: group-theory
---

A group is one of the most fundamental structures in abstract algebra. It is basically a set which is induced with a binary operation; naturally, the operation has to be closed under the set.

## Definition

A group $(G, \cdot)$ is a set $G$ induced with the operation $\cdot$, along with some requirements, called _group axioms_:

- **Associativity**: For all $a$, $b$ and $c$ in $G$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
- **Identity**: There exists an element $e$ in $G$, such that, for all $a$ in $G$, $a \cdot e = e \cdot a = a$. Note that $e$ is called the _identity_ of the group $G$.
- **Invertibility**: For all $a$, there exists an element $b$, such that $a \cdot b = b \cdot a = e$, where $e$ is the identity element. Note that $b$ is usually denoted by $a^{-1}$, and is called the _inverse_ of $a$.
- **Closure**: As mentioned before, the operation $\cdot$ has to be closed under $G$. Formally, for all $a$ and $b$ in $G$, $a \cdot b \in G$.

## Examples

1. $(\mathbb{Z}, +)$:
    - Addition is obviously associative, because $(a + b) + c = a + (b + c)$, for integers $a$, $b$ and $c$.
    - The identity is $0$, because for all integers $a$, $a + 0 = 0 + a = a$.
    - The inverse of an integer $a$ is its additive inverse $-a$.
    - Addition is clearly closed under integers, since $a + b$ is an integer, for integers $a$ and $b$.
2. $(\mathbb{Q}^{\ast}, \times)$, where $\mathbb{Q}^{\ast} = \mathbb{Q} \setminus {0}$:
    - Multiplication is clearly associative, because $(a \times b) \times c = a \times (b \times c)$, for nonzero rationals $a$, $b$ and $c$.
    - The identity is $1$, because for all nonzero rationals $a$, $a \times 1 = 1 \times a = a$.
    - The inverse of an integer $a$ is its reciprocal $\frac{1}{a}$.
    - Multiplication is clearly closed under nonzero rationals, since $a \times b$ is a nonzero rational, for nonzero rationals $a$ and $b$.

## References
- [Napkin](https://web.evanchen.cc/napkin.html)
- [Wikipedia](https://wikipedia.org/)
