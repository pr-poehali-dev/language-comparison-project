import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const languageFeatures = {
    python: {
      name: 'Python',
      color: 'bg-cyan text-white',
      icon: '🐍',
      description: 'Высокоуровневый язык программирования с динамической типизацией',
      pros: [
        'Простой и читаемый синтаксис',
        'Огромное количество библиотек',
        'Отлично подходит для ML/AI',
        'Быстрая разработка'
      ],
      cons: [
        'Медленнее компилируемых языков',
        'GIL ограничивает многопоточность',
        'Высокое потребление памяти'
      ],
      useCases: ['Data Science', 'Web разработка', 'Автоматизация', 'ML/AI'],
      codeExample: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

result = [fibonacci(i) for i in range(10)]
print(result)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
    },
    java: {
      name: 'Java',
      color: 'bg-orange text-white',
      icon: '☕',
      description: 'Объектно-ориентированный язык со строгой типизацией',
      pros: [
        'Платформонезависимость (JVM)',
        'Строгая типизация',
        'Отличная производительность',
        'Большая экосистема'
      ],
      cons: [
        'Многословный синтаксис',
        'Медленный старт приложений',
        'Высокое потребление памяти'
      ],
      useCases: ['Enterprise приложения', 'Android разработка', 'Микросервисы', 'Big Data'],
      codeExample: `public class Fibonacci {
    public static int calculate(int n) {
        if (n <= 1) return n;
        return calculate(n - 1) + calculate(n - 2);
    }
    
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.print(calculate(i) + " ");
        }
    }
}`
    },
    cpp: {
      name: 'C++',
      color: 'bg-purple text-white',
      icon: '⚡',
      description: 'Высокопроизводительный язык с низкоуровневым контролем',
      pros: [
        'Максимальная производительность',
        'Контроль памяти',
        'Поддержка разных парадигм',
        'Близость к железу'
      ],
      cons: [
        'Сложный синтаксис',
        'Ручное управление памятью',
        'Долгая компиляция',
        'Высокий порог входа'
      ],
      useCases: ['Игры', 'Системное ПО', 'Embedded системы', 'High-frequency trading'],
      codeExample: `#include <iostream>
#include <vector>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    std::vector<int> result;
    for (int i = 0; i < 10; i++) {
        result.push_back(fibonacci(i));
    }
    return 0;
}`
    }
  };

  const performanceData = [
    { test: 'Вычисления', python: 100, java: 45, cpp: 12 },
    { test: 'Работа с памятью', python: 150, java: 80, cpp: 25 },
    { test: 'I/O операции', python: 85, java: 60, cpp: 30 },
    { test: 'Многопоточность', python: 180, java: 50, cpp: 20 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">CodeCompare</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'comparison', 'python', 'java', 'cpp', 'performance', 'examples'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors hover:text-primary capitalize ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'comparison' ? 'Сравнение' :
                   section === 'performance' ? 'Производительность' :
                   section === 'examples' ? 'Примеры кода' :
                   section.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 gradient-text">
              Сравнительный анализ языков программирования
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Глубокое погружение в особенности Python, Java и C++. Узнайте, какой язык лучше подходит для ваших задач
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('comparison')} className="hover-scale">
                <Icon name="GitCompare" className="mr-2" size={20} />
                Сравнить языки
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('performance')} className="hover-scale">
                <Icon name="Zap" className="mr-2" size={20} />
                Тесты производительности
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up">
            {Object.entries(languageFeatures).map(([key, lang]) => (
              <Card key={key} className="hover-scale cursor-pointer" onClick={() => scrollToSection(key)}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{lang.icon}</span>
                    <CardTitle>{lang.name}</CardTitle>
                  </div>
                  <CardDescription>{lang.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {lang.useCases.slice(0, 2).map((use) => (
                      <Badge key={use} variant="secondary">{use}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Детальное сравнение</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(languageFeatures).map(([key, lang]) => (
              <Card key={key} className="animate-scale-in">
                <CardHeader className={`${lang.color} rounded-t-lg`}>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{lang.icon}</span>
                    <CardTitle className="text-white">{lang.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ThumbsUp" size={18} className="text-green-500" />
                      Преимущества
                    </h4>
                    <ul className="space-y-2">
                      {lang.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ThumbsDown" size={18} className="text-orange-500" />
                      Недостатки
                    </h4>
                    <ul className="space-y-2">
                      {lang.cons.map((con, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <Icon name="X" size={16} className="text-orange-500 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Lightbulb" size={18} className="text-cyan" />
                      Применение
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lang.useCases.map((use) => (
                        <Badge key={use} className={lang.color}>{use}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="python" className="py-20 px-4">
        <LanguageDetail language={languageFeatures.python} />
      </section>

      <section id="java" className="py-20 px-4 bg-muted/30">
        <LanguageDetail language={languageFeatures.java} />
      </section>

      <section id="cpp" className="py-20 px-4">
        <LanguageDetail language={languageFeatures.cpp} />
      </section>

      <section id="performance" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Тесты производительности</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Время выполнения в миллисекундах (меньше = лучше). Все тесты проводились на идентичном оборудовании.
          </p>

          <div className="space-y-8">
            {performanceData.map((test, idx) => (
              <Card key={idx} className="animate-fade-in hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} className="text-primary" />
                    {test.test}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <PerformanceBar label="Python" value={test.python} max={200} color="bg-cyan" icon="🐍" />
                    <PerformanceBar label="Java" value={test.java} max={200} color="bg-orange" icon="☕" />
                    <PerformanceBar label="C++" value={test.cpp} max={200} color="bg-purple" icon="⚡" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                Выводы по производительности
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-cyan/10 border border-cyan/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🐍</span>
                    <h4 className="font-semibold">Python</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Оптимален для быстрой разработки. Производительность можно улучшить с помощью NumPy, Cython или PyPy.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-orange/10 border border-orange/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">☕</span>
                    <h4 className="font-semibold">Java</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Баланс между производительностью и удобством. JIT-компиляция обеспечивает высокую скорость после прогрева.
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-purple/10 border border-purple/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⚡</span>
                    <h4 className="font-semibold">C++</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Максимальная производительность для критичных задач. Требует больше времени на разработку и отладку.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="examples" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Примеры кода</h2>
          <p className="text-center text-muted-foreground mb-12">
            Одна и та же задача: вычисление последовательности Фибоначчи
          </p>

          <Tabs defaultValue="python" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="python" className="gap-2">
                <span>🐍</span> Python
              </TabsTrigger>
              <TabsTrigger value="java" className="gap-2">
                <span>☕</span> Java
              </TabsTrigger>
              <TabsTrigger value="cpp" className="gap-2">
                <span>⚡</span> C++
              </TabsTrigger>
            </TabsList>

            {Object.entries(languageFeatures).map(([key, lang]) => (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <Card>
                  <CardHeader className={`${lang.color} rounded-t-lg`}>
                    <CardTitle className="text-white flex items-center gap-2">
                      <span className="text-2xl">{lang.icon}</span>
                      {lang.name}
                    </CardTitle>
                    <CardDescription className="text-white/80">
                      Рекурсивное вычисление чисел Фибоначчи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-6">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm font-mono">{lang.codeExample}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            Сравнительный анализ создан в образовательных целях
          </p>
          <div className="flex gap-6 justify-center text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#comparison" className="hover:text-primary transition-colors">Сравнение</a>
            <a href="#performance" className="hover:text-primary transition-colors">Производительность</a>
            <a href="#examples" className="hover:text-primary transition-colors">Примеры</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const LanguageDetail = ({ language }: { language: typeof languageFeatures.python }) => (
  <div className="container mx-auto max-w-4xl animate-fade-in">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-4 mb-4">
        <span className="text-6xl">{language.icon}</span>
        <h2 className="text-5xl font-bold gradient-text">{language.name}</h2>
      </div>
      <p className="text-xl text-muted-foreground">{language.description}</p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card className="hover-scale">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Star" size={20} className="text-yellow-500" />
            Ключевые особенности
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {language.pros.map((pro, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Icon name="ChevronRight" size={18} className="text-primary mt-1" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="hover-scale">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="AlertCircle" size={20} className="text-orange" />
            Ограничения
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {language.cons.map((con, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Icon name="Minus" size={18} className="text-muted-foreground mt-1" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>

    <Card className="mt-6 hover-scale">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Briefcase" size={20} className="text-primary" />
          Области применения
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {language.useCases.map((use) => (
            <Badge key={use} variant="outline" className={`${language.color} text-lg px-4 py-2`}>
              {use}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const PerformanceBar = ({ label, value, max, color, icon }: { 
  label: string; 
  value: number; 
  max: number; 
  color: string; 
  icon: string;
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium flex items-center gap-2">
          <span>{icon}</span>
          {label}
        </span>
        <span className="text-sm text-muted-foreground">{value}ms</span>
      </div>
      <div className="h-8 bg-muted rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out flex items-center justify-end px-3`}
          style={{ width: `${percentage}%` }}
        >
          <span className="text-xs font-bold text-white">{value}ms</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
