import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.thesisBadge}>Master's Thesis Research</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleMain}>DeFog v2</span>
            <span className={styles.heroTitleSub}>
              Multi-Agent Collaborative Service Placement
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            A novel multi-agent framework for dynamic microservice placement in
            hybrid
            <strong> cloud-fog-edge</strong> infrastructures, transcending
            traditional cluster-level optimizations through{" "}
            <strong>distributed consensus</strong> and{" "}
            <strong>collective intelligence</strong>
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.heroButton
              )}
              to="/docs"
            >
              Read Thesis Documentation →
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.heroButton
              )}
              to="/docs/architecture/multi-agent-system"
            >
              Explore Architecture
            </Link>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.metaItem}>
              <strong>Research Area:</strong> Distributed Systems & Edge
              Computing
            </div>
            <div className={styles.metaItem}>
              <strong>Focus:</strong> Autonomous Service Orchestration
            </div>
            <div className={styles.metaItem}>
              <strong>Implementation:</strong> Kubernetes Multi-Cluster +
              Linkerd
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ResearchProblem() {
  return (
    <section className={styles.problem}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Research Problem</h2>
        <p className={styles.sectionSubtitle}>
          Addressing critical limitations in current service placement
          strategies
        </p>

        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.problemNumber}>01</div>
            <h3>Limited Global Awareness</h3>
            <p>
              Current implementations like DeFog operate with constrained
              visibility, making decisions based on local cluster knowledge
              only, leading to suboptimal resource utilization across the
              distributed infrastructure.
            </p>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemNumber}>02</div>
            <h3>Isolated Decision Making</h3>
            <p>
              Each node functions autonomously without leveraging collective
              intelligence, resulting in inefficient resource usage and
              inability to coordinate placement decisions across the system.
            </p>
          </div>

          <div className={styles.problemCard}>
            <div className={styles.problemNumber}>03</div>
            <h3>Reactive Placement Strategies</h3>
            <p>
              Lack of proactive management leads to cascading effects of
              placement decisions, increased response latencies, and failure to
              anticipate workload patterns and resource constraints.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProposedSolution() {
  return (
    <section className={styles.solution}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Proposed Solution</h2>
        <p className={styles.sectionSubtitle}>
          Transforming DeFog into a collaborative multi-agent system
        </p>

        <div className={styles.solutionContent}>
          <div className={styles.solutionDiagram}>
            <div className={styles.evolutionBox}>
              <div className={styles.evolutionTitle}>DeFog v1 (Current)</div>
              <div className={styles.evolutionDesc}>
                ❌ Isolated clusters
                <br />
                ❌ Local decision-making
                <br />
                ❌ Limited awareness
                <br />❌ Reactive placement
              </div>
            </div>

            <div className={styles.evolutionArrow}>→</div>

            <div className={styles.evolutionBox + " " + styles.evolutionBoxNew}>
              <div className={styles.evolutionTitle}>DeFog v2 (Proposed)</div>
              <div className={styles.evolutionDesc}>
                ✓ Connected agents
                <br />
                ✓ Distributed consensus
                <br />
                ✓ Global system awareness
                <br />✓ Predictive placement
              </div>
            </div>
          </div>

          <div className={styles.keyInnovations}>
            <h3>Key Innovations</h3>
            <div className={styles.innovationsList}>
              <div className={styles.innovation}>
                <span className={styles.innovationIcon}>🤝</span>
                <div>
                  <strong>Distributed Consensus Mechanisms</strong>
                  <p>
                    Agents coordinate placement decisions through consensus
                    protocols
                  </p>
                </div>
              </div>
              <div className={styles.innovation}>
                <span className={styles.innovationIcon}>🧠</span>
                <div>
                  <strong>Collective Intelligence</strong>
                  <p>
                    Real-time information exchange about system state and
                    resource availability
                  </p>
                </div>
              </div>
              <div className={styles.innovation}>
                <span className={styles.innovationIcon}>🎯</span>
                <div>
                  <strong>Global Optimization</strong>
                  <p>
                    Holistic view enables better resource utilization across
                    entire infrastructure
                  </p>
                </div>
              </div>
              <div className={styles.innovation}>
                <span className={styles.innovationIcon}>🔮</span>
                <div>
                  <strong>Predictive Strategies</strong>
                  <p>
                    Proactive management of cascading effects and workload
                    patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MultiAgentArchitecture() {
  return (
    <section className={styles.architecture}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Multi-Agent Architecture</h2>
        <p className={styles.sectionSubtitle}>
          Each DeFog instance becomes an intelligent agent with communication
          and collective decision-making capabilities
        </p>

        <div className={styles.architectureDiagram}>
          <div className={styles.agentCluster}>
            <div className={styles.agent}>
              <div className={styles.agentHeader}>Agent A (Cloud)</div>
              <div className={styles.agentBody}>
                <div className={styles.agentComponent}>Decision Engine</div>
                <div className={styles.agentComponent}>State Monitor</div>
                <div className={styles.agentComponent}>Consensus Module</div>
                <div className={styles.agentComponent}>Service Exporter</div>
              </div>
            </div>

            <div className={styles.communicationLine}>
              <span>Consensus Protocol</span>
            </div>

            <div className={styles.agent}>
              <div className={styles.agentHeader}>Agent B (Fog)</div>
              <div className={styles.agentBody}>
                <div className={styles.agentComponent}>Decision Engine</div>
                <div className={styles.agentComponent}>State Monitor</div>
                <div className={styles.agentComponent}>Consensus Module</div>
                <div className={styles.agentComponent}>Service Exporter</div>
              </div>
            </div>

            <div className={styles.communicationLine}>
              <span>Real-time Sync</span>
            </div>

            <div className={styles.agent}>
              <div className={styles.agentHeader}>Agent C (Edge)</div>
              <div className={styles.agentBody}>
                <div className={styles.agentComponent}>Decision Engine</div>
                <div className={styles.agentComponent}>State Monitor</div>
                <div className={styles.agentComponent}>Consensus Module</div>
                <div className={styles.agentComponent}>Service Exporter</div>
              </div>
            </div>
          </div>

          <div className={styles.sharedKnowledge}>
            <div className={styles.knowledgeTitle}>
              🌐 Shared Global Knowledge Base
            </div>
            <div className={styles.knowledgeItems}>
              <span>System State</span>
              <span>Resource Availability</span>
              <span>Load Patterns</span>
              <span>Service Dependencies</span>
              <span>Network Topology</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchMethodology() {
  return (
    <section className={styles.methodology}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Research Methodology</h2>

        <div className={styles.methodologySteps}>
          <div className={styles.methodStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>System Design</h3>
              <p>
                Design multi-agent architecture extending DeFog with consensus
                mechanisms and distributed communication protocols
              </p>
            </div>
          </div>

          <div className={styles.stepArrow}>↓</div>

          <div className={styles.methodStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Implementation</h3>
              <p>
                Develop DeFog v2 using Kubernetes multi-cluster (k3d), Linkerd
                service mesh, and custom Go controllers
              </p>
            </div>
          </div>

          <div className={styles.stepArrow}>↓</div>

          <div className={styles.methodStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Evaluation</h3>
              <p>
                Test with realistic microservice applications across
                geographically distributed clusters, measuring latency, resource
                utilization, and placement accuracy
              </p>
            </div>
          </div>

          <div className={styles.stepArrow}>↓</div>

          <div className={styles.methodStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Analysis</h3>
              <p>
                Compare DeFog v2 performance against baseline DeFog v1 and other
                placement strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpectedContributions() {
  const contributions = [
    {
      icon: "🎯",
      title: "Enhanced Placement Accuracy",
      description:
        "Improved service placement precision through global system awareness and coordinated decision-making across all agents.",
    },
    {
      icon: "⚡",
      title: "Optimized Resource Utilization",
      description:
        "Better efficiency across entire infrastructure by eliminating isolated decisions and leveraging collective intelligence.",
    },
    {
      icon: "🚀",
      title: "Reduced Response Latency",
      description:
        "Decreased latencies through predictive placement strategies and proactive load management.",
    },
    {
      icon: "🔄",
      title: "Adaptive Framework",
      description:
        "Robust system that dynamically adapts to changing workload patterns and resource constraints.",
    },
    {
      icon: "📊",
      title: "Research Framework",
      description:
        "Extensible platform for future research in distributed AI and autonomous edge orchestration.",
    },
    {
      icon: "🛠️",
      title: "Open Implementation",
      description:
        "Fully documented, reproducible implementation serving as foundation for further research.",
    },
  ];

  return (
    <section className={styles.contributions}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Expected Contributions</h2>
        <p className={styles.sectionSubtitle}>
          Scientific and practical outcomes of this research
        </p>

        <div className={styles.contributionsGrid}>
          {contributions.map((contrib, idx) => (
            <div key={idx} className={styles.contributionCard}>
              <div className={styles.contributionIcon}>{contrib.icon}</div>
              <h3>{contrib.title}</h3>
              <p>{contrib.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalStack() {
  return (
    <section className={styles.techStack}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Technical Implementation</h2>
        <p className={styles.sectionSubtitle}>
          Built on production-grade cloud-native technologies
        </p>

        <div className={styles.techCategories}>
          <div className={styles.techCategory}>
            <h3>Infrastructure Layer</h3>
            <div className={styles.techItems}>
              <div className={styles.techItem}>
                <strong>Kubernetes (k3d/k3s)</strong>
                <p>Lightweight multi-cluster orchestration</p>
              </div>
              <div className={styles.techItem}>
                <strong>Docker</strong>
                <p>Container runtime and networking</p>
              </div>
              <div className={styles.techItem}>
                <strong>MetalLB</strong>
                <p>LoadBalancer implementation</p>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h3>Service Mesh Layer</h3>
            <div className={styles.techItems}>
              <div className={styles.techItem}>
                <strong>Linkerd 2</strong>
                <p>Multi-cluster service mesh</p>
              </div>
              <div className={styles.techItem}>
                <strong>mTLS</strong>
                <p>Automatic encryption</p>
              </div>
              <div className={styles.techItem}>
                <strong>Observability</strong>
                <p>Metrics and tracing</p>
              </div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h3>Agent Layer (Novel)</h3>
            <div className={styles.techItems}>
              <div className={styles.techItem}>
                <strong>Go Controllers</strong>
                <p>Custom Kubernetes operators</p>
              </div>
              <div className={styles.techItem}>
                <strong>Consensus Protocol</strong>
                <p>Distributed decision-making</p>
              </div>
              <div className={styles.techItem}>
                <strong>State Synchronization</strong>
                <p>Real-time information exchange</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThesisNavigation() {
  return (
    <section className={styles.navigation}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Thesis Documentation</h2>

        <div className={styles.navGrid}>
          <Link to="/docs" className={styles.navCard}>
            <div className={styles.navIcon}>📖</div>
            <h3>Introduction</h3>
            <p>Background, motivation, and research objectives</p>
          </Link>

          <Link to="/docs/related-work" className={styles.navCard}>
            <div className={styles.navIcon}>🔍</div>
            <h3>Related Work</h3>
            <p>Literature review and existing approaches</p>
          </Link>

          <Link
            to="/docs/architecture/multi-agent-system"
            className={styles.navCard}
          >
            <div className={styles.navIcon}>🏗️</div>
            <h3>System Design</h3>
            <p>Multi-agent architecture and protocols</p>
          </Link>

          <Link to="/docs/implementation" className={styles.navCard}>
            <div className={styles.navIcon}>💻</div>
            <h3>Implementation</h3>
            <p>Technical details and code walkthrough</p>
          </Link>

          <Link to="/docs/evaluation" className={styles.navCard}>
            <div className={styles.navIcon}>📊</div>
            <h3>Evaluation</h3>
            <p>Experiments, results, and analysis</p>
          </Link>

          <Link to="/docs/conclusion" className={styles.navCard}>
            <div className={styles.navIcon}>🎓</div>
            <h3>Conclusion</h3>
            <p>Findings, contributions, and future work</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Multi-Agent Collaborative Framework for Dynamic Microservice Placement - Master's Thesis"
    >
      <HomepageHeader />
      <main>
        <ResearchProblem />
        <ProposedSolution />
        <MultiAgentArchitecture />
        <ResearchMethodology />
        <ExpectedContributions />
        <TechnicalStack />
        <ThesisNavigation />
      </main>
    </Layout>
  );
}
