const stats = [
  {
    value: "29+",
    label: "Years in Business"
  },
  {
    value: "50K+",
    label: "Happy Customers"
  },
  {
    value: "1,500+",
    label: "Products Available"
  },
  {
    value: "98%",
    label: "Customer Satisfaction"
  }
]

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
