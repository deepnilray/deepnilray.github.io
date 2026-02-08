# Complex Numbers: A Comprehensive Mathematical Treatment

**Author:** deepnilray  
**Last Updated:** 2026-02-08  
**Course Level:** Undergraduate and Graduate Mathematics  
**Prerequisites:** Real Analysis, Calculus, Linear Algebra

---

## Table of Contents

### Part I: Foundations
1. [Introduction and Historical Development](#1-introduction-and-historical-development)
2. [Algebraic Construction of Complex Numbers](#2-algebraic-construction-of-complex-numbers)
3. [Basic Algebraic Properties](#3-basic-algebraic-properties)
4. [Geometric Representation](#4-geometric-representation)
5. [Polar Form and Exponential Representation](#5-polar-form-and-exponential-representation)
6. [Roots and Powers](#6-roots-and-powers)
7. [Topology of the Complex Plane](#7-topology-of-the-complex-plane)

### Part II: Complex Functions
8. [Functions of a Complex Variable](#8-functions-of-a-complex-variable)
9. [Limits and Continuity](#9-limits-and-continuity)
10. [Complex Differentiation](#10-complex-differentiation)
11. [Cauchy-Riemann Equations](#11-cauchy-riemann-equations)
12. [Elementary Complex Functions](#12-elementary-complex-functions)
13. [Multivalued Functions and Branches](#13-multivalued-functions-and-branches)

### Part III: Complex Integration
14. [Curves and Contours](#14-curves-and-contours)
15. [Complex Line Integrals](#15-complex-line-integrals)
16. [Cauchy's Theorem](#16-cauchys-theorem)
17. [Cauchy's Integral Formula](#17-cauchys-integral-formula)
18. [Consequences of Cauchy's Formula](#18-consequences-of-cauchys-formula)

### Part IV: Series Representations
19. [Sequences and Series](#19-sequences-and-series)
20. [Power Series](#20-power-series)
21. [Taylor Series](#21-taylor-series)
22. [Laurent Series](#22-laurent-series)
23. [Zeros and Singularities](#23-zeros-and-singularities)

### Part V: The Residue Calculus
24. [Residues](#24-residues)
25. [The Residue Theorem](#25-the-residue-theorem)
26. [Evaluation of Real Integrals](#26-evaluation-of-real-integrals)
27. [Summation of Series](#27-summation-of-series)
28. [Argument Principle and Applications](#28-argument-principle-and-applications)

### Part VI: Advanced Theory
29. [Analytic Continuation](#29-analytic-continuation)
30. [Harmonic Functions](#30-harmonic-functions)
31. [Maximum Modulus Principle](#31-maximum-modulus-principle)
32. [Schwarz Lemma and Applications](#32-schwarz-lemma-and-applications)
33. [Conformal Mapping](#33-conformal-mapping)
34. [Riemann Mapping Theorem](#34-riemann-mapping-theorem)
35. [Entire Functions](#35-entire-functions)
36. [Meromorphic Functions](#36-meromorphic-functions)

### Part VII: Special Topics
37. [Elliptic Functions](#37-elliptic-functions)
38. [The Gamma and Zeta Functions](#38-the-gamma-and-zeta-functions)
39. [Infinite Products](#39-infinite-products)
40. [Analytic Number Theory](#40-analytic-number-theory)

### Part VIII: Applications
41. [Applications in Physics](#41-applications-in-physics)
42. [Applications in Engineering](#42-applications-in-engineering)
43. [Applications in Fluid Dynamics](#43-applications-in-fluid-dynamics)
44. [Applications in Signal Processing](#44-applications-in-signal-processing)
45. [Complex Dynamics and Fractals](#45-complex-dynamics-and-fractals)
46. [Computational Methods](#46-computational-methods)

### Part IX: Problem Sets and Solutions
47. [Problem Set 1: Algebraic Operations](#47-problem-set-1-algebraic-operations)
48. [Problem Set 2: Complex Functions](#48-problem-set-2-complex-functions)
49. [Problem Set 3: Integration](#49-problem-set-3-integration)
50. [Problem Set 4: Series and Residues](#50-problem-set-4-series-and-residues)
51. [Solutions to Selected Problems](#51-solutions-to-selected-problems)

### Appendices
- [Appendix A: Mathematical Prerequisites](#appendix-a-mathematical-prerequisites)
- [Appendix B: Proof Techniques](#appendix-b-proof-techniques)
- [Appendix C: Key Theorems Summary](#appendix-c-key-theorems-summary)
- [Appendix D: Formula Reference](#appendix-d-formula-reference)
- [Appendix E: Tables of Functions](#appendix-e-tables-of-functions)
- [Appendix F: Historical Timeline](#appendix-f-historical-timeline)
- [Appendix G: Further Reading](#appendix-g-further-reading)
- [Appendix H: Software and Computational Tools](#appendix-h-software-and-computational-tools)
- [Appendix I: Notation and Symbols](#appendix-i-notation-and-symbols)
- [Appendix J: Common Mistakes and Pitfalls](#appendix-j-common-mistakes-and-pitfalls)

---

# Part I: Foundations

## 1. Introduction and Historical Development

### 1.1 The Problem of Polynomial Equations

The journey to complex numbers begins with a simple observation: not all polynomial equations have real solutions. Consider the quadratic equation:

x² + 1 = 0

This equation has no solution in the real number system ℝ, since the square of any real number is non-negative. However, mathematics has historically been driven by the desire to solve all algebraic equations, and this particular equation posed a significant challenge.

### 1.2 Early Encounters with Imaginary Numbers

**16th Century Italy: The Cubic Equation**

The story of complex numbers is inextricably linked to the solution of cubic equations. In 1545, Girolamo Cardano published *Ars Magna* (The Great Art), which contained the first published solution to the general cubic equation:

x³ + px = q

Using Scipione del Ferro's and Niccolò Tartaglia's methods, Cardano derived the formula:

x = ³√(q/2 + √((q/2)² + (p/3)³)) + ³√(q/2 - √((q/2)² + (p/3)³))

The problem arose when considering equations like x³ = 15x + 4. Using the formula:

x = ³√(2 + √(-121)) + ³√(2 - √(-121))

This requires computing the square root of a negative number! Cardano called these quantities "sophistic" and "as subtle as they are useless."

**Rafael Bombelli's Breakthrough (1572)**

Rafael Bombelli was the first mathematician to develop systematic rules for arithmetic with these mysterious quantities. In his *L'Algebra*, he introduced rules for what he called "plus of minus" (√-1) and "minus of minus" (-√-1).

Bombelli showed that for the equation x³ = 15x + 4, if we formally manipulate:

x = (2 + √-121)^(1/3) + (2 - √-121)^(1/3)
  = (2 + 11√-1)^(1/3) + (2 - 11√-1)^(1/3)

By proposing (2 + √-1) as a cube root of (2 + 11√-1), he verified:

(2 + √-1)³ = 8 + 12√-1 + 6(-1) + (-1)√-1 = 2 + 11√-1

Similarly, (2 - √-1)³ = 2 - 11√-1

Therefore: x = (2 + √-1) + (2 - √-1) = 4

Indeed, 4³ = 64 = 15(4) + 4 = 64! The imaginary parts cancelled, leaving a real solution obtained through imaginary calculations.

### 1.3 The Geometric Interpretation

**Wallis and Wessel (17th-18th Century)**

John Wallis (1616-1703) in his *Algebra* (1685) first suggested that complex numbers might have a geometric interpretation. He proposed representing √-1 geometrically, though his construction was incomplete.

The first rigorous geometric interpretation came from Caspar Wessel (1745-1818), a Norwegian-Danish mathematician and surveyor. In 1797, he presented a paper to the Royal Danish Academy showing that complex numbers could be represented as points in a plane, with addition corresponding to vector addition.

**Jean-Robert Argand (1806)**

Independently, Jean-Robert Argand (1768-1822), a Swiss bookkeeper and amateur mathematician, published a geometric interpretation in 1806. His exposition was clearer and more influential, and the complex plane is often called the "Argand diagram" in his honor.

Argand's key insight was to represent:
- Real numbers on a horizontal axis
- Imaginary numbers on a perpendicular vertical axis
- Complex number a + bi as the point (a, b)

This made addition obvious (parallelogram law) and explained multiplication geometrically as rotation and scaling.

**Carl Friedrich Gauss (1777-1855)**

Gauss used complex numbers extensively in his work, particularly in his 1799 doctoral dissertation where he proved the Fundamental Theorem of Algebra. He developed the geometric interpretation independently around 1799 but didn't publish until 1831.

Gauss coined the term "complex number" (from Latin complexus, meaning "composed of parts") and popularized the notation a + bi. He also introduced the term "norm" for what we now call modulus.

### 1.4 The Development of Complex Analysis

**Augustin-Louis Cauchy (1789-1857)**

Cauchy laid the foundations of complex analysis in a series of papers from 1814-1825. His major contributions include:

1. **Complex integration** (1814): Defined contour integrals
2. **Cauchy's Integral Theorem** (1825): For closed contours in simply connected domains
3. **Cauchy's Integral Formula** (1831): Expressing function values via boundary integrals
4. **Residue calculus** (1826): Computing integrals using singularities

Cauchy's work made complex analysis a rigorous mathematical theory.

**Bernhard Riemann (1826-1866)**

Riemann revolutionized complex analysis with his geometric and intuitive approach:

1. **Riemann surfaces** (1851): Resolved multi-valued functions by introducing multi-sheeted domains
2. **Conformal mapping**: Studied angle-preserving transformations
3. **Riemann mapping theorem** (1851): Characterized simply connected domains
4. **Riemann hypothesis** (1859): Connected zeta function zeros to prime distribution

Riemann's work connected complex analysis to geometry, topology, and number theory.

**Karl Weierstrass (1815-1897)**

Weierstrass provided rigorous foundations using power series:

1. Defined holomorphic functions via convergent power series
2. Developed theory of analytic continuation
3. Studied entire functions and their factorization
4. Constructed pathological examples (continuous nowhere-differentiable functions)

The Cauchy-Weierstrass-Riemann era (1820-1870) established complex analysis as a mature field.

### 1.5 20th Century and Beyond

**Applications Explosion**

Complex analysis became essential in:

1. **Physics**: Quantum mechanics (Schrödinger, Heisenberg, Dirac)
2. **Engineering**: AC circuits (Heaviside, Steinmetz), control theory
3. **Signal processing**: Fourier analysis, filter design
4. **Aerodynamics**: Wing design (Kutta-Joukowski), potential flow
5. **Number theory**: Prime number theorem, modular forms

**Modern Developments**

1. **Complex dynamics** (1980s): Mandelbrot and Julia sets
2. **Computational methods**: Fast Fourier Transform (Cooley-Tukey, 1965)
3. **Operator theory**: Functional analysis, spectral theory
4. **Algebraic geometry**: Schemes, complex manifolds
5. **String theory**: Conformal field theory

### 1.6 The Fundamental Theorem of Algebra

The culmination of these developments is the Fundamental Theorem of Algebra, which justifies the existence of complex numbers.

**Theorem 1.1** (Fundamental Theorem of Algebra)  
Every non-constant polynomial with complex coefficients has at least one complex root.

**Corollary 1.2**  
Every polynomial p(z) of degree n ≥ 1 with complex coefficients factors completely:

p(z) = a_n(z - α₁)(z - α₂)···(z - α_n)

where α₁, ..., α_n ∈ ℂ are the roots (counted with multiplicity).

**Historical Proofs:**

1. **Gauss's first proof** (1799): Used geometric continuity arguments
2. **Gauss's second proof** (1816): Used existence of minimum of |p(z)|
3. **Gauss's third proof** (1816): Used properties of cyclotomic polynomials
4. **Gauss's fourth proof** (1849): Used induction and symmetric functions

**Modern Proof Sketch (Liouville's Theorem):**

Suppose p(z) has no zeros. Then f(z) = 1/p(z) is entire. For large |z|:

|p(z)| ≥ |a_n||z|^n - |a_(n-1)||z|^(n-1) - ... - |a₀| → ∞

So |f(z)| → 0, making f bounded. By Liouville's Theorem (proved later), f is constant, contradicting deg(p) ≥ 1.

### 1.7 Philosophical Implications

The acceptance of complex numbers raised deep questions:

**Existence and Reality**

- What does it mean for a number to "exist"?
- Are complex numbers "real" in any sense?
- How can √-1 be meaningful?

**Mathematical Pragmatism**

The modern view: Mathematical objects exist within consistent formal systems. Complex numbers are "real" because:
1. They form a consistent algebraic system (field)
2. They solve important problems
3. They have geometric meaning
4. They lead to correct predictions in physics

**Impact on Mathematics**

Complex numbers showed that:
- Algebraic closure is possible
- Geometry and algebra are deeply connected
- "Impossible" problems may need expanded number systems
- Mathematical abstraction has practical value

---

## 2. Algebraic Construction of Complex Numbers

### 2.1 Formal Construction

We now give a rigorous construction of ℂ from ℝ.

**Construction 2.1** (Complex Numbers as Ordered Pairs)

Define:
ℂ = ℝ × ℝ = {(a, b) : a, b ∈ ℝ}

with operations:

**Addition:**
(a, b) + (c, d) = (a + c, b + d)

**Multiplication:**
(a, b) · (c, d) = (ac - bd, ad + bc)

**Motivation for Multiplication:**

If we want (0, 1) to behave like √-1, we need:
(0, 1) · (0, 1) = (-1, 0)

For general (a, b) = (a, 0) + (0, 1) · (b, 0), if multiplication is distributive:

(a, b) · (c, d) = [(a, 0) + (0, 1)(b, 0)] · [(c, 0) + (0, 1)(d, 0)]
                = (a, 0)(c, 0) + (a, 0)(0, 1)(d, 0) + (0, 1)(b, 0)(c, 0) + (0, 1)²(b, 0)(d, 0)
                = (ac, 0) + (0, ad) + (0, bc) + (-1, 0)(bd, 0)
                = (ac - bd, ad + bc)

**Definition 2.2** (Imaginary Unit)

Define i = (0, 1). Then:

i² = (0, 1) · (0, 1) = (0·0 - 1·1, 0·1 + 1·0) = (-1, 0) = -1

**Notation Convention:**

We identify:
- (a, 0) with the real number a
- (0, b) with bi
- (a, b) with a + bi

This gives the familiar form z = a + bi.

### 2.2 Verification of Field Axioms

We now prove that (ℂ, +, ·) is a field.

**Theorem 2.3** (ℂ is a Field)

The set ℂ with addition and multiplication satisfies all field axioms.

**Proof:**

**A1. Closure under addition:**  
For (a, b), (c, d) ∈ ℂ, clearly (a + c, b + d) ∈ ℂ.

**A2. Associativity of addition:**  
[(a, b) + (c, d)] + (e, f) = (a + c, b + d) + (e, f) = (a + c + e, b + d + f)
(a, b) + [(c, d) + (e, f)] = (a, b) + (c + e, d + f) = (a + c + e, b + d + f)

**A3. Commutativity of addition:**  
(a, b) + (c, d) = (a + c, b + d) = (c + a, d + b) = (c, d) + (a, b)

**A4. Additive identity:**  
(0, 0) + (a, b) = (a, b) for all (a, b) ∈ ℂ

**A5. Additive inverse:**  
For (a, b) ∈ ℂ, define -(a, b) = (-a, -b).
Then (a, b) + (-a, -b) = (0, 0).

**M1. Closure under multiplication:**  
For (a, b), (c, d) ∈ ℂ, clearly (ac - bd, ad + bc) ∈ ℂ.

**M2. Associativity of multiplication:**  
We must verify [(a, b)(c, d)](e, f) = (a, b)[(c, d)(e, f)].

Left side:
(ac - bd, ad + bc)(e, f) = ((ac - bd)e - (ad + bc)f, (ac - bd)f + (ad + bc)e)
                         = (ace - bde - adf - bcf, acf - bdf + ade + bce)

Right side:
(a, b)(ce - df, cf + de) = (a(ce - df) - b(cf + de), a(cf + de) + b(ce - df))
                         = (ace - adf - bcf - bde, acf + ade + bce - bdf)

These are equal.

**M3. Commutativity of multiplication:**  
(a, b)(c, d) = (ac - bd, ad + bc) = (ca - db, cb + da) = (c, d)(a, b)

**M4. Multiplicative identity:**  
(1, 0)(a, b) = (1·a - 0·b, 1·b + 0·a) = (a, b)

**M5. Multiplicative inverse:**  
For (a, b) ≠ (0, 0), we need (x, y) such that (a, b)(x, y) = (1, 0).

This requires:
ax - by = 1
bx + ay = 0

Solving: x = a/(a² + b²), y = -b/(a² + b²)

Since (a, b) ≠ (0, 0), we have a² + b² > 0, so this is well-defined.

Verification:
(a, b) · (a/(a²+b²), -b/(a²+b²)) = ((a² + b²)/(a² + b²), 0) = (1, 0)

**D. Distributivity:**  
(a, b)[(c, d) + (e, f)] = (a, b)(c + e, d + f)
                        = (a(c + e) - b(d + f), a(d + f) + b(c + e))
                        = (ac + ae - bd - bf, ad + af + bc + be)

(a, b)(c, d) + (a, b)(e, f) = (ac - bd, ad + bc) + (ae - bf, af + be)
                              = (ac - bd + ae - bf, ad + bc + af + be)

These are equal. ∎

### 2.3 Complex Conjugation

**Definition 2.4** (Complex Conjugate)

For z = a + bi, the complex conjugate is:

z̄ = a - bi

**Geometric Interpretation:**  
Conjugation reflects across the real axis.

**Theorem 2.5** (Properties of Conjugation)

For all z, w ∈ ℂ:

1. z + w = z̄ + w̄
2. z - w = z̄ - w̄
3. zw = z̄ · w̄
4. (z/w) = z̄/w̄ for w ≠ 0
5. z̄̄ = z
6. z + z̄ = 2Re(z)
7. z - z̄ = 2i Im(z)
8. zz̄ = |z|² = [Re(z)]² + [Im(z)]²
9. z^n = (z̄)^n for n ∈ ℤ
10. z is real ⟺ z̄ = z
11. z is purely imaginary ⟺ z̄ = -z (and z ≠ 0)

**Proof:**

(1) Let z = a + bi, w = c + di.
z + w = (a + c) + (b + d)i
z + w = (a + c) - (b + d)i
z̄ + w̄ = (a - bi) + (c - di) = (a + c) - (b + d)i ✓

(3) zw = (a + bi)(c + di) = (ac - bd) + (ad + bc)i
zw = (ac - bd) - (ad + bc)i

z̄w̄ = (a - bi)(c - di) = (ac - bd) - (ad + bc)i ✓

(8) zz̄ = (a + bi)(a - bi) = a² - abi + abi - b²i² = a² + b² ✓

Others are similar. ∎

**Corollary 2.6** (Solving for Real and Imaginary Parts)

For any z ∈ ℂ:

Re(z) = (z + z̄)/2
Im(z) = (z - z̄)/(2i)

### 2.4 Embedding of Real Numbers

**Theorem 2.7** (ℝ as Subfield of ℂ)

The map φ: ℝ → ℂ defined by φ(a) = (a, 0) = a + 0i is an injective field homomorphism.

**Proof:**

**Injectivity:**  
φ(a) = φ(b) ⇒ (a, 0) = (b, 0) ⇒ a = b

**Preserves addition:**  
φ(a + b) = (a + b, 0) = (a, 0) + (b, 0) = φ(a) + φ(b)

**Preserves multiplication:**  
φ(ab) = (ab, 0) = (a, 0)(b, 0) = φ(a)φ(b)

**Preserves identity:**  
φ(1) = (1, 0) = multiplicative identity in ℂ

**Preserves inverse:**  
For a ≠ 0: φ(1/a) = (1/a, 0) = (1, 0)/(a, 0) = φ(1)/φ(a) ∎

This allows us to identify ℝ with a subfield of ℂ:

ℝ ≅ {(a, 0) : a ∈ ℝ} ⊂ ℂ

### 2.5 Vector Space Structure

**Theorem 2.8** (ℂ as Vector Space over ℝ)

ℂ is a 2-dimensional real vector space with basis {1, i}.

**Proof:**

**Linear independence:**  
Suppose a · 1 + b · i = 0 for a, b ∈ ℝ.
Then a + bi = 0, so a = b = 0.

**Spanning:**  
Any z = a + bi ∈ ℂ can be written as z = a · 1 + b · i.

**Dimension:**  
Since {1, i} is a linearly independent spanning set, dim_ℝ(ℂ) = 2. ∎

**Corollary 2.9**

Every z ∈ ℂ has a unique representation z = a + bi where a, b ∈ ℝ.

**Remark:**  
ℂ can also be viewed as a 1-dimensional vector space over itself, with basis {1}.

### 2.6 Non-Orderability of ℂ

Unlike ℝ, the complex numbers cannot be ordered compatibly with their field structure.

**Theorem 2.10** (ℂ Cannot Be Ordered)

There exists no total order < on ℂ satisfying:

1. **Trichotomy:** For all z, w ∈ ℂ, exactly one of z < w, z = w, or w < z holds
2. **Transitivity:** z < w and w < u implies z < u
3. **Addition compatibility:** z < w implies z + u < w + u for all u
4. **Multiplication compatibility:** z < w and 0 < u implies zu < wu

**Proof:**

Suppose such an ordering exists. Then either i > 0 or i < 0.

**Case 1:** i > 0  
By multiplication compatibility: i · i > 0 · i
So -1 > 0
Adding 1: 0 > 1
But also 1 > 0 (since 1 = 1² > 0)
Contradiction.

**Case 2:** i < 0  
By addition compatibility: i + (-i) < 0 + (-i)
So 0 < -i
By multiplication compatibility: (-i)(-i) > 0
So -1 > 0
Same contradiction as Case 1.

Therefore no such ordering exists. ∎

**Remark:**  
ℂ can be given a total order (e.g., lexicographic), but not one compatible with both addition and multiplication.

### 2.7 Algebraic Closure

**Definition 2.11** (Algebraically Closed Field)

A field F is **algebraically closed** if every non-constant polynomial with coefficients in F has a root in F.

**Theorem 2.12** (ℂ is Algebraically Closed)

The field ℂ is algebraically closed.

**Proof:**  
This is the Fundamental Theorem of Algebra, to be proved later using complex analysis tools. ∎

**Significance:**  
ℂ is the algebraic closure of ℝ. This makes ℂ the "natural" setting for polynomial algebra.

---

## 3. Basic Algebraic Properties

### 3.1 Addition and Subtraction

**Definition 3.1** (Addition)

For z₁ = a₁ + b₁i and z₂ = a₂ + b₂i:

z₁ + z₂ = (a₁ + a₂) + (b₁ + b₂)i

**Geometric Interpretation:**  
Addition corresponds to vector addition using the parallelogram law.

**Properties:**

1. **Associativity:** (z₁ + z₂) + z₃ = z₁ + (z₂ + z₃)
2. **Commutativity:** z₁ + z₂ = z₂ + z₁
3. **Identity:** z + 0 = z
4. **Inverse:** z + (-z) = 0

**Definition 3.2** (Subtraction)

z₁ - z₂ = (a₁ - a₂) + (b₁ - b₂)i

**Geometric Interpretation:**  
z₁ - z₂ represents the vector from z₂ to z₁.

**Example 3.1:** Addition and Subtraction

Let z₁ = 3 + 4i, z₂ = 1 - 2i, z₃ = -2 + 5i.

(a) z₁ + z₂ = (3 + 1) + (4 - 2)i = 4 + 2i

(b) z₁ - z₂ = (3 - 1) + (4 - (-2))i = 2 + 6i

(c) z₁ + z₂ + z₃ = (3 + 1 - 2) + (4 - 2 + 5)i = 2 + 7i

(d) 2z₁ - 3z₂ = 2(3 + 4i) - 3(1 - 2i)
              = (6 + 8i) - (3 - 6i)
              = 3 + 14i

(e) z₁ + z̄₁ = (3 + 4i) + (3 - 4i) = 6 = 2Re(z₁)

(f) z₁ - z̄₁ = (3 + 4i) - (3 - 4i) = 8i = 2i Im(z₁)

### 3.2 Multiplication

**Definition 3.3** (Multiplication)

For z₁ = a₁ + b₁i and z₂ = a₂ + b₂i:

z₁z₂ = (a₁a₂ - b₁b₂) + (a₁b₂ + a₂b₁)i

**Derivation:**

Using distributivity and i² = -1:

z₁z₂ = (a₁ + b₁i)(a₂ + b₂i)
     = a₁a₂ + a₁b₂i + b₁a₂i + b₁b₂i²
     = a₁a₂ + (a₁b₂ + b₁a₂)i - b₁b₂
     = (a₁a₂ - b₁b₂) + (a₁b₂ + b₁a₂)i

**Properties:**

1. **Associativity:** (z₁z₂)z₃ = z₁(z₂z₃)
2. **Commutativity:** z₁z₂ = z₂z₁
3. **Identity:** z · 1 = z
4. **Inverse:** z · z⁻¹ = 1 for z ≠ 0
5. **Distributivity:** z₁(z₂ + z₃) = z₁z₂ + z₁z₃
6. **No zero divisors:** z₁z₂ = 0 ⟹ z₁ = 0 or z₂ = 0

**Example 3.2:** Multiplication

(a) (2 + 3i)(4 - i) = 8 - 2i + 12i - 3i²
                    = 8 + 10i + 3
                    = 11 + 10i

(b) (1 + i)(1 - i) = 1 - i + i - i²
                    = 1 + 1
                    = 2

(c) (1 + i)² = 1 + 2i + i² = 1 + 2i - 1 = 2i

(d) (3i)(2i) = 6i² = -6

(e) (a + bi)(a - bi) = a² - (bi)² = a² + b² (always real!)

(f) Expand (2 + i)³:
    (2 + i)² = 4 + 4i + i² = 3 + 4i
    (2 + i)³ = (3 + 4i)(2 + i)
             = 6 + 3i + 8i + 4i²
             = 6 + 11i - 4
             = 2 + 11i

### 3.3 Division

**Theorem 3.4** (Multiplicative Inverse)

For z = a + bi ≠ 0, the multiplicative inverse is:

z⁻¹ = (a - bi)/(a² + b²) = z̄/|z|²

**Proof:**

We need w such that zw = 1.

(a + bi)w = 1

Multiply both sides by a - bi:

(a + bi)(a - bi)w = (a - bi)
(a² + b²)w = a - bi
w = (a - bi)/(a² + b²)

Verification:
(a + bi) · (a - bi)/(a² + b²) = (a² + b²)/(a² + b²) = 1 ✓

Note: a² + b² > 0 since z ≠ 0. ∎

**Definition 3.5** (Division)

For z₁, z₂ ∈ ℂ with z₂ ≠ 0:

z₁/z₂ = z₁ · z₂⁻¹ = z₁z̄₂/|z₂|²

**Algorithm for Division:**

To compute z₁/z₂:

1. Multiply numerator and denominator by z̄₂
2. Simplify denominator to |z₂|² (real number)
3. Expand numerator
4. Separate real and imaginary parts

**Example 3.3:** Division

(a) (3 + 4i)/(1 + 2i)

Multiply by conjugate of denominator:

= (3 + 4i)(1 - 2i)/[(1 + 2i)(1 - 2i)]
= (3 - 6i + 4i - 8i²)/(1 + 4)
= (3 - 2i + 8)/5
= (11 - 2i)/5
= 11/5 - (2/5)i

(b) 1/i = (1 · (-i))/(i · (-i)) = -i/1 = -i

Verification: i · (-i) = -i² = 1 ✓

(c) (2 - i)/(3 + 2i) = (2 - i)(3 - 2i)/[(3 + 2i)(3 - 2i)]
                      = (6 - 4i - 3i + 2i²)/(9 + 4)
                      = (6 - 7i - 2)/13
                      = (4 - 7i)/13
                      = 4/13 - (7/13)i

(d) i/(1 - i) = i(1 + i)/[(1 - i)(1 + i)]
              = (i + i²)/(1 + 1)
              = (i - 1)/2
              = -1/2 + (1/2)i

(e) (1 + i)/(1 - i) = (1 + i)²/[(1 - i)(1 + i)]
                     = (1 + 2i + i²)/2
                     = (1 + 2i - 1)/2
                     = 2i/2
                     = i

### 3.4 Powers of i

**Proposition 3.6** (Cyclic Nature of Powers of i)

The powers of i repeat with period 4:

| n mod 4 | i^n  |
|---------|------|
| 0       | 1    |
| 1       | i    |
| 2       | -1   |
| 3       | -i   |

**Proof:**

i⁰ = 1
i¹ = i
i² = -1 (by definition)
i³ = i² · i = -i
i⁴ = (i²)² = (-1)² = 1

Since i⁴ = 1, the powers repeat:
i^(n+4) = i^n · i⁴ = i^n · 1 = i^n ∎

**General Formula:**

For any integer n:

i^n = i^(n mod 4)

**Proof:**

Write n = 4q + r where r ∈ {0, 1, 2, 3}.
Then i^n = i^(4q+r) = (i⁴)^q · i^r = 1^q · i^r = i^r ∎

**Example 3.4:** Computing High Powers of i

(a) i⁴⁷ = i^(47 mod 4) = i³ = -i
   (since 47 = 4·11 + 3)

(b) i¹⁰⁰ = i^(100 mod 4) = i⁰ = 1
   (since 100 = 4·25)

(c) i^(-23) = 1/i²³ = 1/i³ = 1/(-i) = -1/i = -(-i) = i
   Or: i^(-23) = i^(-23 mod 4) = i^(-23 + 24) = i¹ = i

(d) i²⁰²⁵ = i^(2025 mod 4) = i¹ = i
   (since 2025 = 4·506 + 1)

(e) Sum: 1 + i + i² + i³ = 1 + i - 1 - i = 0
   
   In general: Σ(k=0 to 3) i^k = 0

(f) For any n: Σ(k=0 to 4n-1) i^k = n(1 + i - 1 - i) = 0

### 3.5 Binomial Theorem

**Theorem 3.7** (Binomial Theorem for Complex Numbers)

For z, w ∈ ℂ and n ∈ ℕ:

(z + w)^n = Σ(k=0 to n) C(n,k) z^(n-k) w^k

where C(n,k) = n!/(k!(n-k)!) is the binomial coefficient.

**Proof:**

The proof is identical to the real case, using induction and the distributive law. ∎

**Example 3.5:** Using the Binomial Theorem

(a) (1 + i)²  = C(2,0)·1 + C(2,1)i + C(2,2)i²
               = 1 + 2i - 1
               = 2i

(b) (1 + i)³  = C(3,0) + C(3,1)i + C(3,2)i² + C(3,3)i³
               = 1 + 3i - 3 - i
               = -2 + 2i

(c) (1 + i)⁴  = C(4,0) + C(4,1)i + C(4,2)i² + C(4,3)i³ + C(4,4)i⁴
               = 1 + 4i - 6 - 4i + 1
               = -4

(d) (2 - i)³  = 2³ + 3·2²·(-i) + 3·2·(-i)² + (-i)³
               = 8 - 12i + 6i² - i³
               = 8 - 12i - 6 + i
               = 2 - 11i

(e) (1 + i√3)²= 1 + 2i√3 + (i√3)²
               = 1 + 2i√3 - 3
               = -2 + 2i√3

(f) Expand (a + bi)²:
    (a + bi)² = a² + 2abi + (bi)²
              = a² - b² + 2abi

    Real part: a² - b²
    Imaginary part: 2ab

### 3.6 Polynomial Equations

**Simple Quadratic Equations**

**Example 3.6:**  Solve z² = -1

z² + 1 = 0

Solutions: z = ±i

Verification:
i² = -1 ✓
(-i)² = i² = -1 ✓

**Example 3.7:** Solve z² = -4

z = ±√(-4) = ±2i

Check: (2i)² = 4i² = -4 ✓

**General Quadratic Formula**

**Theorem 3.8** (Quadratic Formula)

For az² + bz + c = 0 (a ≠ 0), where a, b, c ∈ ℂ:

z = (-b ± √(b² - 4ac))/(2a)

where √w denotes any square root of w.

**Example 3.8:** Solve z² + 2z + 2 = 0

Using the quadratic formula:

z = (-2 ± √(4 - 8))/2
  = (-2 ± √(-4))/2
  = (-2 ± 2i)/2
  = -1 ± i

Solutions: z = -1 + i and z = -1 - i

Verification for z = -1 + i:
(-1 + i)² + 2(-1 + i) + 2 = (1 - 2i + i²) - 2 + 2i + 2
                           = (1 - 2i - 1) - 2 + 2i + 2
                           = 0 ✓

**Example 3.9:** Solve z² - 2iz - 1 = 0

z = (2i ± √(-4 - 4(-1)))/2
  = (2i ± √(-4 + 4))/2
  = (2i ± 0)/2
  = i

Double root: z = i

Check: i² - 2i(i) - 1 = -1 - 2i² - 1 = -1 + 2 - 1 = 0 ✓

---

## 4. Geometric Representation

### 4.1 The Complex Plane (Argand Diagram)

**Definition 4.1** (Complex Plane)

The complex plane (or Argand diagram) is ℝ² with:
- Horizontal axis (real axis): represents Re(z)
- Vertical axis (imaginary axis): represents Im(z)
- Each z = a + bi corresponds to point (a, b)

**Terminology:**

- **Origin:** z = 0 corresponds to (0, 0)
- **Real axis:** Set of points with Im(z) = 0
- **Imaginary axis:** Set of points with Re(z) = 0
- **Upper half-plane:** {z : Im(z) > 0}
- **Lower half-plane:** {z : Im(z) < 0}
- **Right half-plane:** {z : Re(z) > 0}
- **Left half-plane:** {z : Re(z) < 0}

**Geometric Operations:**

**1. Addition:** Vector addition (parallelogram law)

If z₁ and z₂ are represented as vectors from the origin, then z₁ + z₂ is the diagonal of the parallelogram with sides z₁ and z₂.

**2. Subtraction:** z₁ - z₂ is the vector from z₂ to z₁

The difference z₁ - z₂ represents displacement from z₂ to z₁.

**3. Conjugation:** Reflection across the real axis

z̄ is the mirror image of z with respect to the x-axis.

**4. Multiplication by real number:** Scaling

For r > 0: rz is z scaled by factor r (same direction)
For r < 0: rz is scaled and rotated by π

**5. Multiplication by i:** Rotation by 90°

iz is z rotated 90° counterclockwise.

**Example 4.1:** Geometric Visualization

Let z = 3 + 4i.

- Position: point (3, 4)
- z̄ = 3 - 4i: point (3, -4) (reflection)
- -z = -3 - 4i: point (-3, -4) (rotation by π)
- iz = i(3 + 4i) = 3i - 4 = -4 + 3i: point (-4, 3) (90° rotation)
- 2z = 6 + 8i: point (6, 8) (scaling)

**Example 4.2:** Triangle Inequality Visualization

For z = 3 + 4i and w = 1 + 2i:

- z + w = 4 + 6i forms one side of triangle
- |z| = 5, |w| = √5, |z + w| = √52 = 2√13 ≈ 7.21
- Triangle inequality: 2√13 < 5 + √5 ≈ 7.24 ✓

The three points 0, z, z+w form a triangle, and the triangle inequality states that any side is less than the sum of the other two.

### 4.2 Modulus (Absolute Value)

**Definition 4.2** (Modulus)

For z = a + bi, the modulus or absolute value is:

|z| = √(a² + b²) = √(zz̄)

**Geometric Interpretation:**

|z| is the Euclidean distance from origin to z.
|z - w| is the distance between points z and w.

**Theorem 4.3** (Properties of Modulus)

For all z, w ∈ ℂ:

1. |z| ≥ 0, with equality iff z = 0
2. |z̄| = |z|
3. |-z| = |z|
4. |Re(z)| ≤ |z| and |Im(z)| ≤ |z|
5. |zw| = |z||w|
6. |z + w| ≤ |z| + |w| (triangle inequality)
7. ||z| - |w|| ≤ |z - w| (reverse triangle inequality)
8. |z^n| = |z|^n for n ∈ ℕ
9. |z/w| = |z|/|w| for w ≠ 0
10. |z|² = zz̄
11. max{|Re(z)|, |Im(z)|} ≤ |z| ≤ |Re(z)| + |Im(z)|

**Detailed Proofs:**

**Proof of (5): |zw| = |z||w|**

Method 1 (Direct):
|zw|² = (zw)(zw) = (zw)(z̄w̄) = zz̄ww̄ = |z|²|w|²

Taking square roots: |zw| = |z||w|

Method 2 (Using components):
Let z = a + bi, w = c + di.
zw = (ac - bd) + (ad + bc)i

|zw|² = (ac - bd)² + (ad + bc)²
      = a²c² - 2abcd + b²d² + a²d² + 2abcd + b²c²
      = a²c² + b²d² + a²d² + b²c²
      = a²(c² + d²) + b²(c² + d²)
      = (a² + b²)(c² + d²)
      = |z|²|w|²

**Proof of (6): |z + w| ≤ |z| + |w|** (Triangle Inequality)

Method 1 (Algebraic):
|z + w|² = (z + w)(z̄ + w̄)
         = zz̄ + zw̄ + z̄w + ww̄
         = |z|² + |w|² + (zw̄ + z̄w)
         = |z|² + |w|² + 2Re(zw̄)
         ≤ |z|² + |w|² + 2|zw̄|    (since Re(ζ) ≤ |ζ|)
         = |z|² + |w|² + 2|z||w|
         = (|z| + |w|)²

Taking square roots: |z + w| ≤ |z| + |w|

Method 2 (Geometric):
Consider the triangle with vertices 0, z, z+w.
The length of any side is at most the sum of the lengths of the other two sides.

**When does equality hold in triangle inequality?**

Equality holds iff zw̄ is a non-negative real number.

This occurs when arg(z) = arg(w), i.e., z and w point in the same direction (or one is zero).

**Proof of (7): ||z| - |w|| ≤ |z - w|** (Reverse Triangle Inequality)

From triangle inequality:
|z| = |z - w + w| ≤ |z - w| + |w|

Therefore: |z| - |w| ≤ |z - w|

Similarly:
|w| = |w - z + z| ≤ |w - z| + |z|

Therefore: |w| - |z| ≤ |w - z| = |z - w|

Combining: ||z| - |w|| ≤ |z - w|

**Example 4.3:** Computing Moduli

(a) |3 + 4i| = √(9 + 16) = √25 = 5

(b) |5 - 12i| = √(25 + 144) = √169 = 13

(c) |1 + i| = √(1 + 1) = √2

(d) |-2i| = √(0 + 4) = 2

(e) |7| = √(49 + 0) = 7

(f) |(3 + 4i)(1 - 2i)| = |3 + 4i| · |1 - 2i|
                        = 5 · √5
                        = 5√5

    Verify directly:
    (3 + 4i)(1 - 2i) = 11 + 10i
    |11 + 10i| = √(121 + 100) = √221 = √(25·√221/25) = 5√(221/25)...

    Actually: |1 - 2i| = √(1 + 4) = √5
    So |z||w| = 5√5
    
    Check: (11)² + (10)² = 121 + 100 = 221 = 25·5 + 96... Let me recalculate.
    
    Actually 5² �� 5 = 125, but 121 + 100 = 221.
    Hmm, let me redo: (3+4i)(1-2i) = 3 - 6i + 4i - 8i² = 3 - 2i + 8 = 11 - 2i
    |11 - 2i| = √(121 + 4) = √125 = 5√5 ✓

(g) |(2 + 3i)⁴| = |2 + 3i|⁴
                 = (√(4 + 9))⁴
                 = (√13)⁴
                 = 169

### 4.3 Distance in the Complex Plane

**Definition 4.4** (Distance)

The distance between z and w is:

d(z, w) = |z - w|

**Theorem 4.5** (Metric Properties)

The function d: ℂ × ℂ → [0, ∞) is a metric:

1. d(z, w) ≥ 0, with equality iff z = w
2. d(z, w) = d(w, z) (symmetry)
3. d(z, u) ≤ d(z, w) + d(w, u) (triangle inequality)

**Proof:**

(1) |z - w| ≥ 0, and |z - w| = 0 iff z - w = 0 iff z = w.

(2) d(z, w) = |z - w| = |-(w - z)| = |w - z| = d(w, z)

(3) d(z, u) = |z - u| = |(z - w) + (w - u)|
            ≤ |z - w| + |w - u|
            = d(z, w) + d(w, u) ∎

**Remark:**  
This makes (ℂ, d) a metric space, allowing us to define topological concepts.

### 4.4 Basic Geometric Sets

**Definition 4.6** (Disks and Circles)

For z₀ ∈ ℂ and r > 0:

- **Open disk:** D(z₀, r) = {z ∈ ℂ : |z - z₀| < r}
- **Closed disk:** D̄(z₀, r) = {z ∈ ℂ : |z - z₀| ≤ r}
- **Circle:** C(z₀, r) = {z ∈ ℂ : |z - z₀| = r}
- **Punctured disk:** D*(z₀, r) = {z ∈ ℂ : 0 < |z - z₀| < r}

**Definition 4.7** (Annulus)

An annulus is:

A(z₀, r₁, r₂) = {z ∈ ℂ : r₁ < |z - z₀| < r₂}

where 0 ≤ r₁ < r₂.

**Definition 4.8** (Half-Planes)

- **Upper half-plane:** H⁺ = {z : Im(z) > 0}
- **Lower half-plane:** H⁻ = {z : Im(z) < 0}
- **Right half-plane:** {z : Re(z) > 0}
- **Left half-plane:** {z : Re(z) < 0}

**Example 4.4:** Describing Sets

(a) |z - 2i| = 3
    Circle of radius 3 centered at 2i.
    Points: {z : distance from z to 2i equals 3}

(b) |z + 1 - i| < 2
    Open disk of radius 2 centered at -1 + i.

(c) 1 < |z| < 2
    Annulus centered at origin with inner radius 1, outer radius 2.

(d) |z - 1| = |z + 1|
    Set of points equidistant from 1 and -1.
    This is the imaginary axis (perpendicular bisector).
    
    Proof: |z - 1| = |z + 1|
    |z - 1|² = |z + 1|²
    (z - 1)(z̄ - 1) = (z + 1)(z̄ + 1)
    zz̄ - z - z̄ + 1 = zz̄ + z + z̄ + 1
    -z - z̄ = z + z̄
    -2z̄ = 2z (where z̄ here means conjugate)
    Actually: -2Re(z) = 2Re(z)
    4Re(z) = 0
    Re(z) = 0

(e) Re(z) > 2
    Open right half-plane to the right of vertical line x = 2.

(f) |z - i| + |z + i| = 4
    Ellipse with foci at i and -i.
    Sum of distances to foci equals 4.

### 4.5 Argument

**Definition 4.9** (Argument)

For z ≠ 0, an argument of z is any angle θ ∈ ℝ satisfying:

z = |z|(cos θ + i sin θ)

Equivalently:
cos θ = Re(z)/|z|
sin θ = Im(z)/|z|

We write θ ∈ arg(z).

**Note:** The argument is multi-valued. If θ is an argument, so is θ + 2πk for any k ∈ ℤ.

**Definition 4.10** (Principal Argument)

The principal argument, denoted Arg(z), is the unique value of arg(z) in (-π, π].

**Computation of Arg(z):**

For z = a + bi ≠ 0:

```
Arg(z) = ⎧ arctan(b/a)           if a > 0
         ⎪ arctan(b/a) + π       if a < 0, b ≥ 0
         ⎨ arctan(b/a) - π       if a < 0, b < 0
         ⎪ π/2                   if a = 0, b > 0
         ⎩ -π/2                  if a = 0, b < 0
```

This is the atan2(b, a) function in many programming languages.

**Theorem 4.11** (Properties of Argument)

For z, w ∈ ℂ \ {0}:

1. arg(zw) ≡ arg(z) + arg(w) (mod 2π)
2. arg(z/w) ≡ arg(z) - arg(w) (mod 2π)
3. arg(z̄) ≡ -arg(z) (mod 2π)
4. arg(z^n) ≡ n·arg(z) (mod 2π)
5. arg(1/z) ≡ -arg(z) (mod 2π)
6. arg(-z) ≡ arg(z) + π (mod 2π)

**Proof of (1):**

Let z = r₁e^(iθ₁) and w = r₂e^(iθ₂).
Then zw = r₁r₂e^(i(θ₁+θ₂)).
So arg(zw) = θ₁ + θ₂ + 2πk = arg(z) + arg(w) (mod 2π). ∎

**Example 4.5:** Computing Arguments

(a) z = 1 + i
    |z| = √2
    Arg(z) = arctan(1/1) = π/4 = 45°

(b) z = -1 + i
    |z| = √2
    a = -1 < 0, b = 1 > 0
    Arg(z) = arctan(1/(-1)) + π = -π/4 + π = 3π/4 = 135°

(c) z = -1 - i
    |z| = √2
    a = -1 < 0, b = -1 < 0
    Arg(z) = arctan(-1/(-1)) - π = π/4 - π = -3π/4 = -135°

(d) z = 1 - i
    |z| = √2
    a = 1 > 0
    Arg(z) = arctan(-1/1) = -π/4 = -45°

(e) z = i
    a = 0, b = 1 > 0
    Arg(z) = π/2 = 90°

(f) z = -3
    |z| = 3
    a = -3 < 0, b = 0
    Arg(z) = π = 180°

(g) z = 3 - 4i
    |z| = 5
    Arg(z) = arctan(-4/3) ≈ -0.927 rad ≈ -53.13°

(h) For z = 1 + i and w = -1 + i:
    Arg(z) = π/4, Arg(w) = 3π/4
    
    zw = (1 + i)(-1 + i) = -1 + i - i + i² = -1 - 1 = -2
    Arg(zw) = π
    
    Verify: Arg(z) + Arg(w) = π/4 + 3π/4 = π ✓

### 4.6 Multiplication as Rotation and Scaling

**Theorem 4.12** (Geometric Effect of Multiplication)

Multiplication by z = re^(iθ) performs:
1. Rotation by angle θ
2. Scaling by factor r

**Proof:**

Let w = ρe^(iφ). Then:

zw = re^(iθ) · ρe^(iφ) = (rρ)e^(i(θ+φ))

This shows:
- |zw| = rρ = r|w| (scaling by r)
- arg(zw) = θ + φ = θ + arg(w) (rotation by θ) ∎

**Special Cases:**

1. **Multiplication by i:** rotation by π/2 (90°) counterclockwise
   - i(a + bi) = ai + bi² = -b + ai
   - Point (a, b) → (-b, a)

2. **Multiplication by -1:** rotation by π (180°)
   - -1(a + bi) = -a - bi
   - Point (a, b) → (-a, -b)

3. **Multiplication by -i:** rotation by -π/2 (90° clockwise)
   - -i(a + bi) = -ai - bi² = b - ai
   - Point (a, b) → (b, -a)

4. **Multiplication by e^(iθ):** pure rotation by θ
   - |e^(iθ)| = 1, so no scaling

5. **Multiplication by r > 0:** pure scaling by r
   - arg(r) = 0, so no rotation

**Example 4.6:** Geometric Transformations

(a) Rotate z = 1 + i by 90° counterclockwise:
    iz = i(1 + i) = i + i² = -1 + i
    
    Check: (1, 1) → (-1, 1) ✓ (90° rotation)

(b) Rotate z = 3 + 4i by 180°:
    -z = -3 - 4i
    
    Check: (3, 4) → (-3, -4) ✓

(c) Scale z = 2 + 3i by factor 2:
    2z = 4 + 6i
    
    |2z| = √(16 + 36) = √52 = 2√13 = 2|z| ✓

(d) Rotate z = 1 by π/3 (60°):
    (cos π/3 + i sin π/3) · 1 = 1/2 + i√3/2

(e) Apply transformation w → (1 + i)w to w = 2:
    (1 + i) · 2 = 2 + 2i
    
    Interpretation:
    |1 + i| = √2 (scale by √2)
    Arg(1 + i) = π/4 (rotate by 45°)
    
    Starting point: (2, 0)
    After rotation by 45°: (√2, √2)
    After scaling by √2: (2, 2) ✓

---

## 5. Polar Form and Exponential Representation

### 5.1 Polar (Trigonometric) Form

**Theorem 5.1** (Polar Representation)

Every non-zero complex number z can be uniquely written as:

z = r(cos θ + i sin θ)

where:
- r = |z| > 0 is the modulus
- θ = Arg(z) ∈ (-π, π] is the principal argument

**Proof:**

For z = a + bi ≠ 0, let r = √(a² + b²) > 0.

Then a² + b² = r², so (a/r)² + (b/r)² = 1.

Therefore, there exists unique θ ∈ (-π, π] with:
cos θ = a/r and sin θ = b/r

Hence:
z = a + bi = r(a/r) + ir(b/r) = r(cos θ + i sin θ)

Uniqueness follows from uniqueness of Arg(z). ∎

**Conversion Formulas:**

**Rectangular → Polar:**
```
Given z = a + bi:
r = √(a² + b²)
θ = Arg(z) = atan2(b, a)
```

**Polar → Rectangular:**
```
Given z = r(cos θ + i sin θ):
a = r cos θ
b = r sin θ
```

**Example 5.1:** Converting to Polar Form

(a) z = 1 + √3i
    r = √(1 + 3) = 2
    θ = arctan(√3/1) = π/3
    **z = 2(cos π/3 + i sin π/3)**

    Verify: 2(1/2 + i√3/2) = 1 + √3i ✓

(b) z = -√3 + i
    r = √(3 + 1) = 2
    θ = arctan(1/(-√3)) + π = -π/6 + π = 5π/6
    **z = 2(cos 5π/6 + i sin 5π/6)**

    Verify: 2(-√3/2 + i/2) = -√3 + i ✓

(c) z = -4
    r = 4
    θ = π
    **z = 4(cos π + i sin π)**

(d) z = 3i
    r = 3
    θ = π/2
    **z = 3(cos π/2 + i sin π/2)**

(e) z = -2 - 2√3i
    r = √(4 + 12) = 4
    θ = arctan(-2√3/(-2)) - π = arctan(√3) - π = π/3 - π = -2π/3
    **z = 4(cos(-2π/3) + i sin(-2π/3))**

**Example 5.2:** Converting to Rectangular Form

(a) z = 3(cos π/6 + i sin π/6)
    a = 3 cos π/6 = 3(√3/2) = 3√3/2
    b = 3 sin π/6 = 3(1/2) = 3/2
    **z = (3√3/2) + (3/2)i**

(b) z = 2(cos 3π/4 + i sin 3π/4)
    a = 2(-√2/2) = -√2
    b = 2(√2/2) = √2
    **z = -√2 + √2i**

(c) z = 5(cos(-π/3) + i sin(-π/3))
    a = 5(1/2) = 5/2
    b = 5(-√3/2) = -5√3/2
    **z = 5/2 - (5√3/2)i**

### 5.2 Euler's Formula

**Theorem 5.2** (Euler's Formula)

For any real number θ:

e^(iθ) = cos θ + i sin θ

**Proof via Taylor Series:**

Recall the Taylor series:

e^x = Σ(n=0 to ∞) x^n/n! = 1 + x + x²/2! + x³/3! + x⁴/4! + ...

cos x = Σ(n=0 to ∞) (-1)^n x^(2n)/(2n)! = 1 - x²/2! + x⁴/4! - x⁶/6! + ...

sin x = Σ(n=0 to ∞) (-1)^n x^(2n+1)/(2n+1)! = x - x³/3! + x⁵/5! - x⁷/7! + ...

Substitute x = iθ in the exponential series:

e^(iθ) = Σ(n=0 to ∞) (iθ)^n/n!
       = Σ(n=0 to ∞) i^n θ^n/n!

Separate even and odd powers:

       = [1 + (iθ)²/2! + (iθ)⁴/4! + (iθ)⁶/6! + ...]
         + [iθ + (iθ)³/3! + (iθ)⁵/5! + (iθ)⁷/7! + ...]

       = [1 + i²θ²/2! + i⁴θ⁴/4! + i⁶θ⁶/6! + ...]
         + i[θ + i²θ³/3! + i⁴θ⁵/5! + i⁶θ⁷/7! + ...]

       = [1 - θ²/2! + θ⁴/4! - θ⁶/6! + ...]
         + i[θ - θ³/3! + θ⁵/5! - θ⁷/7! + ...]

       = cos θ + i sin θ ∎

**Exponential Form:**

Any z ≠ 0 can be written as:

z = re^(iθ)

where r = |z| and θ = arg(z).

This is the **exponential form** or **polar exponential form**.

**Euler's Identity:**

Setting θ = π in Euler's formula:

e^(iπ) = cos π + i sin π = -1 + 0i = -1

Therefore:

**e^(iπ) + 1 = 0**

This remarkable equation connects:
- e (base of natural logarithm, transcendental)
- i (imaginary unit, algebraic)
- π (ratio of circle circumference to diameter, transcendental)
- 1 (multiplicative identity)
- 0 (additive identity)

Richard Feynman called it "the most remarkable formula in mathematics."

**Corollary 5.3** (Euler Relations)

For any real θ:

cos θ = (e^(iθ) + e^(-iθ))/2

sin θ = (e^(iθ) - e^(-iθ))/(2i)

**Proof:**

From Euler's formula:
e^(iθ) = cos θ + i sin θ
e^(-iθ) = cos(-θ) + i sin(-θ) = cos θ - i sin θ

Adding:
e^(iθ) + e^(-iθ) = 2 cos θ
Therefore: cos θ = (e^(iθ) + e^(-iθ))/2

Subtracting:
e^(iθ) - e^(-iθ) = 2i sin θ
Therefore: sin θ = (e^(iθ) - e^(-iθ))/(2i) ∎

**Example 5.3:** Using Euler's Formula

(a) Express z = 2(cos π/4 + i sin π/4) in exponential form:
    **z = 2e^(iπ/4)**

(b) Convert z = 3e^(i2π/3) to rectangular form:
    z = 3(cos 2π/3 + i sin 2π/3)
      = 3(-1/2 + i√3/2)
      = **-3/2 + (3√3/2)i**

(c) Compute e^(iπ/2):
    e^(iπ/2) = cos π/2 + i sin π/2 = 0 + i = **i**
    
    So: **e^(iπ/2) = i**

(d) Compute e^(i3π/2):
    e^(i3π/2) = cos 3π/2 + i sin 3π/2 = 0 - i = **-i**

(e) Express cos(5θ) in terms of cos θ:
    Using e^(i5θ) = (e^(iθ))⁵ = (cos θ + i sin θ)⁵
    
    Expand using binomial theorem, then take real part.
    (This leads to Chebyshev polynomials)

### 5.3 De Moivre's Theorem

**Theorem 5.4** (De Moivre's Theorem)

For any real θ and integer n:

(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)

**Proof:**

Using exponential form:

(cos θ + i sin θ)^n = (e^(iθ))^n = e^(inθ) = cos(nθ) + i sin(nθ) ∎

**Corollary 5.5** (Powers in Exponential Form)

For z = re^(iθ) and n ∈ ℤ:

z^n = r^n e^(inθ)

**Applications:**

**1. Computing High Powers:**

**Example 5.4:** Compute (1 + i)^8

Method 1 (Exponential form):
1 + i = √2 e^(iπ/4)

(1 + i)^8 = (√2)^8 e^(i8π/4)
          = 16 e^(i2π)
          = 16(cos 2π + i sin 2π)
          = 16(1 + 0i)
          = **16**

Method 2 (Verification by expansion):
(1 + i)² = 2i
(1 + i)⁴ = (2i)² = -4
(1 + i)^8 = (-4)² = 16 ✓

**Example 5.5:** Compute (1 - √3i)^10

1 - √3i = 2(1/2 - i√3/2) = 2(cos(-π/3) + i sin(-π/3)) = 2e^(-iπ/3)

(1 - √3i)^10 = 2^10 e^(-i10π/3)
              = 1024 e^(-i10π/3)
              = 1024 e^(-i(3·2π + 4π/3))
              = 1024 e^(-i4π/3)    (since e^(-i6π) = 1)
              = 1024(cos(-4π/3) + i sin(-4π/3))
              = 1024(-1/2 + i√3/2)
              = **-512 + 512√3i**

**2. Deriving Trigonometric Identities:**

**Example 5.6:** Derive cos(3θ) in terms of cos θ

Using De Moivre:
(cos θ + i sin θ)³ = cos 3θ + i sin 3θ

Expand left side:
(cos θ + i sin θ)³ = cos³θ + 3cos²θ(i sin θ) + 3cos θ(i sin θ)² + (i sin θ)³
                    = cos³θ + 3i cos²θ sin θ - 3cos θ sin²θ - i sin³θ
                    = (cos³θ - 3cos θ sin²θ) + i(3cos²θ sin θ - sin³θ)

Equating real parts:
cos 3θ = cos³θ - 3cos θ sin²θ
       = cos³θ - 3cos θ(1 - cos²θ)
       = cos³θ - 3cos θ + 3cos³θ
       = **4cos³θ - 3cos θ**

Equating imaginary parts:
sin 3θ = 3cos²θ sin θ - sin³θ
       = 3(1 - sin²θ) sin θ - sin³θ
       = **3sin θ - 4sin³θ**

**Example 5.7:** Express cos⁴θ in terms of cos(nθ)

From Euler: cos θ = (e^(iθ) + e^(-iθ))/2

cos⁴θ = [(e^(iθ) + e^(-iθ))/2]⁴
      = (1/16)(e^(iθ) + e^(-iθ))⁴
      = (1/16)[e^(i4θ) + 4e^(i2θ) + 6 + 4e^(-i2θ) + e^(-i4θ)]
      = (1/16)[(e^(i4θ) + e^(-i4θ)) + 4(e^(i2θ) + e^(-i2θ)) + 6]
      = (1/16)[2cos 4θ + 8cos 2θ + 6]
      = **(1/8)cos 4θ + (1/2)cos 2θ + 3/8**

---

## 6. Roots and Powers

### 6.1 nth Roots Theorem

**Theorem 6.1** (nth Roots of Complex Numbers)

The equation z^n = w (where w ≠ 0, n ∈ ℕ, n ≥ 2) has exactly n distinct solutions in ℂ.

If w = re^(iθ), then the solutions are:

z_k = r^(1/n) exp[i(θ + 2πk)/n],  k = 0, 1, 2, ..., n-1

**Proof:**

Let z = ρe^(iφ). Then z^n = w requires:

ρ^n e^(inφ) = re^(iθ)

This gives:
- ρ^n = r, so ρ = r^(1/n) (unique positive nth root)
- e^(inφ) = e^(iθ), so nφ ≡ θ (mod 2π)

Therefore: φ = (θ + 2πk)/n for k ∈ ℤ

Since e^(i(φ + 2π)) = e^(iφ), the angles φ repeat with period 2π.
In the range φ ∈ [0, 2π), we get exactly n distinct values for k = 0, 1, ..., n-1.

For k ≥ n:
(θ + 2πk)/n = (θ + 2π(k - n))/n + 2π

which gives the same value of e^(iφ).

Therefore, there are exactly n distinct solutions. ∎

**Geometric Interpretation:**

The nth roots of w = re^(iθ) form a regular n-gon:
- Centered at the origin
- Inscribed in circle of radius r^(1/n)
- One vertex at angle θ/n
- Vertices equally spaced by angle 2π/n

**Example 6.1:** Square Roots of i

Solve z² = i.

Write i = e^(iπ/2). Then:

z_k = e^(i(π/2 + 2πk)/2) = e^(iπ(1 + 4k)/4),  k = 0, 1

z₀ = e^(iπ/4) = cos π/4 + i sin π/4 = √2/2 + i√2/2

z₁ = e^(i5π/4) = cos 5π/4 + i sin 5π/4 = -√2/2 - i√2/2

**Verification:**
z₀² = e^(iπ/2) = i ✓
z₁² = e^(i5π/2) = e^(iπ/2) = i ✓

**Example 6.2:** Cube Roots of 8

Solve z³ = 8.

Write 8 = 8e^(i·0). Then:

z_k = 8^(1/3) e^(i·2πk/3) = 2e^(i2πk/3),  k = 0, 1, 2

z₀ = 2e^0 = 2

z₁ = 2e^(i2π/3) = 2(cos 2π/3 + i sin 2π/3)
   = 2(-1/2 + i√3/2)
   = -1 + i√3

z₂ = 2e^(i4π/3) = 2(cos 4π/3 + i sin 4π/3)
   = 2(-1/2 - i√3/2)
   = -1 - i√3

**Verification:**
z₀³ = 2³ = 8 ✓
z₁³ = (-1 + i√3)³ = [2e^(i2π/3)]³ = 8e^(i2π) = 8 ✓

**Example 6.3:** Fourth Roots of -16

Solve z⁴ = -16.

Write -16 = 16e^(iπ). Then:

z_k = 16^(1/4) e^(i(π + 2πk)/4) = 2e^(iπ(1 + 2k)/4),  k = 0, 1, 2, 3

z₀ = 2e^(iπ/4) = 2(√2/2 + i√2/2) = √2 + i√2

z₁ = 2e^(i3π/4) = 2(-√2/2 + i√2/2) = -√2 + i√2

z₂ = 2e^(i5π/4) = 2(-√2/2 - i√2/2) = -√2 - i√2

z₃ = 2e^(i7π/4) = 2(√2/2 - i√2/2) = √2 - i√2

These four roots form a square inscribed in the circle |z| = 2.

### 6.2 Roots of Unity

**Definition 6.2** (nth Roots of Unity)

The solutions to z^n = 1 are called the **nth roots of unity**:

ω_k = e^(2πik/n),  k = 0, 1, ..., n-1

**Properties:**

1. ω₀ = 1 (always)
2. |ω_k| = 1 for all k (all lie on unit circle)
3. ω_k = (ω₁)^k (powers of primitive root)
4. ω₁ is a **primitive nth root of unity** (generates all others)
5. ω₁ = e^(2πi/n) = cos(2π/n) + i sin(2π/n)

**Theorem 6.3** (Sum of Roots of Unity)

Σ(k=0 to n-1) ω_k = 0 for n ≥ 2

**Proof:**

Let S = Σ(k=0 to n-1) ω_k where ω = ω₁ = e^(2πi/n).

Since ω_k = ω^k:

S = Σ(k=0 to n-1) ω^k = (ω^n - 1)/(ω - 1)    (geometric series)

But ω^n = e^(i2π) = 1, so:

S = (1 - 1)/(ω - 1) = 0 ∎

**Alternative Proof:**

Multiply S by ω:
ωS = ω·(1 + ω + ω² + ... + ω^(n-1))
   = ω + ω² + ω³ + ... + ω^n
   = ω + ω² + ω³ + ... + 1     (since ω^n = 1)
   = S

So ωS = S, which gives (ω - 1)S = 0.
Since ω ≠ 1 (for n ≥ 2), we have S = 0. ∎

**Example 6.4:** Cube Roots of Unity

z³ = 1

ω_k = e^(i2πk/3), k = 0, 1, 2

ω₀ = 1

ω₁ = e^(i2π/3) = cos 2π/3 + i sin 2π/3 = -1/2 + i√3/2

ω₂ = e^(i4π/3) = cos 4π/3 + i sin 4π/3 = -1/2 - i√3/2

**Properties:**
- ω₁ + ω₂ = -1 (so 1 + ω₁ + ω₂ = 0)
- ω₁ω₂ = 1
- ω₁² = ω₂ and ω₂² = ω₁
- ω₁³ = ω₂³ = 1

These are roots of x³ - 1 = (x - 1)(x² + x + 1) = 0.
The non-real roots satisfy x² + x + 1 = 0.

**Example 6.5:** Fourth Roots of Unity

z⁴ = 1

ω_k = e^(iπk/2), k = 0, 1, 2, 3

ω₀ = 1
ω₁ = e^(iπ/2) = i
ω₂ = e^(iπ) = -1
ω₃ = e^(i3π/2) = -i

These form a square: {1, i, -1, -i}

Sum: 1 + i - 1 - i = 0 ✓

**Example 6.6:** Fifth Roots of Unity

z⁵ = 1

ω_k = e^(i2πk/5), k = 0, 1, 2, 3, 4

ω₁ = e^(i2π/5) = cos 72° + i sin 72°

These form a regular pentagon inscribed in the unit circle.

**Remarkable fact:** cos(2π/5) = (√5 - 1)/4 (related to golden ratio)

### 6.3 General nth Roots

**Theorem 6.4** (Expressing All nth Roots)

If w₀ is any particular nth root of w, then all nth roots are:

w₀ · ω_k,  k = 0, 1, ..., n-1

where ω_k are the nth roots of unity.

**Proof:**

If w₀^n = w, then:

(w₀ω_k)^n = w₀^n ω_k^n = w · 1 = w

Conversely, if z^n = w, then (z/w₀)^n = z^n/w₀^n = w/w = 1.

So z/w₀ is an nth root of unity, say ω_k.
Therefore z = w₀ω_k. ∎

**Example 6.7:** Fourth Roots of 16i

First, find one fourth root:
16i = 16e^(iπ/2)
One root: w₀ = 16^(1/4) e^(iπ/8) = 2e^(iπ/8)

All four roots:
z_k = 2e^(iπ/8) · e^(iπk/2) = 2e^(iπ(1 + 4k)/8),  k = 0, 1, 2, 3

z₀ = 2e^(iπ/8)
z₁ = 2e^(i5π/8)
z₂ = 2e^(i9π/8)
z₃ = 2e^(i13π/8)

**Example 6.8:** Cube Roots of 1 + i

First find |1 + i| = √2 and Arg(1 + i) = π/4.

One cube root:
w₀ = (√2)^(1/3) e^(iπ/12) = 2^(1/6) e^(iπ/12)

All three roots:
z_k = 2^(1/6) e^(iπ/12) · e^(i2πk/3) = 2^(1/6) e^(iπ(1 + 8k)/12),  k = 0, 1, 2

z₀ = 2^(1/6) e^(iπ/12)
z₁ = 2^(1/6) e^(i3π/4)
z₂ = 2^(1/6) e^(i17π/12)

### 6.4 Solving Polynomial Equations

**Example 6.9:** Solve z⁴ + 4 = 0

z⁴ = -4 = 4e^(iπ)

z_k = 4^(1/4) e^(i(π + 2πk)/4) = √2 e^(iπ(1 + 2k)/4),  k = 0, 1, 2, 3

z₀ = √2 e^(iπ/4) = √2(√2/2 + i√2/2) = 1 + i

z₁ = √2 e^(i3π/4) = √2(-√2/2 + i√2/2) = -1 + i

z₂ = √2 e^(i5π/4) = √2(-√2/2 - i√2/2) = -1 - i

z₃ = √2 e^(i7π/4) = √2(√2/2 - i√2/2) = 1 - i

**Example 6.10:** Solve z⁶ - z³ - 2 = 0

This is quadratic in z³:
Let w = z³. Then: w² - w - 2 = 0

(w - 2)(w + 1) = 0

So w = 2 or w = -1.

**Case 1:** z³ = 2
z_k = 2^(1/3) e^(i2πk/3),  k = 0, 1, 2

**Case 2:** z³ = -1 = e^(iπ)
z_k = e^(iπ(1 + 2k)/3),  k = 0, 1, 2
    = e^(iπ/3), e^(iπ), e^(i5π/3)

Total: 6 solutions as expected.

---

## 7. Topology of the Complex Plane

### 7.1 Open and Closed Sets

**Definition 7.1** (Open Set)

A set U ⊆ ℂ is **open** if for every z ∈ U, there exists ε > 0 such that D(z, ε) ⊆ U.

**Example 7.1:**
- D(z₀, r) is open
- Upper half-plane H⁺ = {z : Im(z) > 0} is open
- ℂ is open
- The empty set ∅ is open

**Definition 7.2** (Closed Set)

A set F ⊆ ℂ is **closed** if its complement ℂ \ F is open.

**Example 7.2:**
- Closed disk D̄(z₀, r) = {z : |z - z₀| ≤ r} is closed
- Circle C(z₀, r) = {z : |z - z₀| = r} is closed
- ℂ is closed (since ℂ \ ℂ = ∅ is open)
- ∅ is closed (since ℂ \ ∅ = ℂ is open)

**Definition 7.3** (Closure)

The closure of A ⊆ ℂ, denoted Ā, is the smallest closed set containing A.

Equivalently: Ā = A ∪ {limit points of A}

**Definition 7.4** (Interior)

The interior of A, denoted Int(A) or A°, is the largest open set contained in A.

**Definition 7.5** (Boundary)

The boundary of A, denoted ∂A, is ∂A = Ā \ Int(A).

**Example 7.3:**

For D = D(0, 1) = {z : |z| < 1}:
- Closure: D̄ = {z : |z| ≤ 1}
- Interior: Int(D) = D
- Boundary: ∂D = {z : |z| = 1}

### 7.2 Connected Sets

**Definition 7.6** (Connected Set)

A set S ⊆ ℂ is **connected** if it cannot be written as S = A ∪ B where A and B are non-empty, disjoint, open sets (relative to S).

Intuitively: S is "in one piece."

**Definition 7.7** (Path-Connected)

A set S is **path-connected** if for any z, w ∈ S, there exists a continuous curve γ: [0,1] → S with γ(0) = z and γ(1) = w.

**Theorem 7.8**

For open subsets of ℂ, connected and path-connected are equivalent.

**Definition 7.9** (Domain)

A **domain** is an open, connected subset of ℂ.

**Example 7.4:**
- D(z₀, r) is a domain
- H⁺ is a domain
- ℂ \ {0} is a domain
- ℂ \ [0, ∞) (slit plane) is a domain
- {z : 0 < |z| < 1} (punctured disk) is a domain

**Definition 7.10** (Region)

A **region** is a domain together with some, all, or none of its boundary points.

### 7.3 Compact Sets

**Definition 7.11** (Bounded Set)

A set S ⊆ ℂ is **bounded** if there exists M > 0 such that |z| < M for all z ∈ S.

**Definition 7.12** (Compact Set)

A set K ⊆ ℂ is **compact** if it is closed and bounded.

**Theorem 7.13** (Heine-Borel for ℂ)

A set K ⊆ ℂ is compact if and only if it is closed and bounded.

**Example 7.5:**
- Closed disk D̄(z₀, r) is compact
- Circle C(z₀, r) is compact
- [0,1] × [0,1] ⊂ ℂ is compact
- Open disk D(z₀, r) is NOT compact (not closed)
- ℂ is NOT compact (not bounded)

**Theorem 7.14** (Bolzano-Weierstrass)

Every infinite bounded subset of ℂ has a limit point.

**Theorem 7.15** (Sequential Compactness)

K is compact if and only if every sequence in K has a convergent subsequence with limit in K.

---

This document continues to grow beyond the character limit. Would you like me to:

1. **Continue with the remaining sections** in more depth (Parts II-IX)?
2. **Focus on specific topics** you'd like expanded further (e.g., more on integration, residues, or applications)?
3. **Add more worked examples** to existing sections?
4. **Expand the problem sets** with detailed solutions?

Please let me know which direction you'd prefer!
