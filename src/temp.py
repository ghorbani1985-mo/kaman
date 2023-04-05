
class node:
    def __init__(self, num):
        self.value = num
        self.left = None
        self.right = None
        self.height = 1

class AVLTree():
    def __init__(self):
        self.balance_factor = None
        self.root = None

    def height(self, Node):
        if Node is None:
            return 0
        else:
            return Node.height
        
    def balance(self, Node):
        if Node is None:
            return 0
        else:
            return self.height(Node.left) - self.height(Node.right)


    def MinimumValueNode(self, Node):
        if Node is None or Node.left is None:
            return Node
        else:
            return self.MinimumValueNode(Node.left)
    

    def rotateR(self, Node):
        a = Node.left
        b = a.right
        a.right = Node
        Node.left = b
        Node.height = 1 + max(self.height(Node.left), self.height(Node.right))
        a.height = 1 + max(self.height(a.left), self.height(a.right))
        return a
    
    def rotateL(self, Node):
        a = Node.right
        b = a.left
        a.left = Node
        Node.right = b
        Node.height = 1 + max(self.height(Node.left), self.height(Node.right))
        a.height = 1 + max(self.height(a.left), self.height(a.right))
        return a


    def insert(self, element: int):
        if self.contain(element):
            if self.root is None:
                self.root =  node(element)
            elif element <= self.root.value:
                self.root.left = self.insert(element)

            elif element > self.root.value:
                self.root.right = self.insert(element, self.root.right)
            self.root.height = 1 + max(self.height(self.root.left), self.height(self.root.right))
            self.balance_factor  = self.balance(self.root)
            if self.balance_factor  > 1 and self.root.left.value > element:
                self.root = self.rotateR(self.root)
            if self.balance_factor  < -1 and element > self.root.right.value:
                self.root = self.rotateL(self.root)
            if self.balance_factor  > 1 and element > self.root.left.value:
                self.root.left = self.rotateL(self.root.left)
                self.root = self.rotateR(self.root)
            if self.balance_factor  < -1 and element < self.root.right.value:
                self.root.right = self.rotateR(self.root.right)
                self.root = self.rotateL(self.root)

    def remove(self, element: int):
        if self.contain(element):

            if self.root is None:
                pass
            elif element < self.root.value:
                self.root.left = self.remove(element)
            elif element > self.root.value:
                self.root.right = self.remove(element, self.root.right)
            else:
                if self.root.left is None:
                    lt = self.root.right
                    self.root = None
                    self.root = lt

                elif self.root.right is None:
                    lt = self.root.left
                    self.root = None
                    self.root = lt

                rgt = self.MinimumValueNode(self.root.right)
                self.root.value = rgt.value
                self.root.right = self.remove(rgt.value)
                
            if self.root is None:
                pass

            self.root.height = 1 + max(self.height(self.root.left), self.height(self.root.right))
            self.balance_factor  = self.balance(self.root)
            if self.balance_factor  > 1 and self.balance(self.root.left) >= 0:
                self.root=  self.rotateR(self.root)
            if self.balance_factor  < -1 and self.balance(self.root.right) <= 0:
                self.root = self.rotateL(self.root)
            if self.balance_factor  > 1 and self.balance(self.root.left) < 0:
                self.root.left = self.rotateL(self.root.left)
                self.root = self.rotateR(self.root)
            if self.balance_factor  < -1 and self.balance(self.root.right) > 0:
                self.root.right = self.rotateR(self.root.right)
                self.root = self.rotateL(self.root)


    def contain(self, element: int):
        root_copy = self.root
        nodes = [root_copy]
        nodes_values = [] 
        if root_copy is None:
            return False
        while len(nodes) < 1:
            r_node = root_copy.right
            l_node = root_copy.left
            if r_node is not None:
                nodes_values.append(r_node.value) 
                nodes.append(r_node)
            if l_node is not None:
                nodes_values.append(l_node.value) 
                nodes.append(l_node)
            root_copy = nodes.pop()
        if element in nodes_values:
            return True
        else:
            return False
            
            

















class Object(object):
    pass

def initialize_population(population_size, generate_random_individual):
    population = list()
    for i in range(0, population_size):
        genotype = generate_random_individual()
        individual = Object()
        setattr(individual, "genotype", genotype)
        setattr(individual, "fitness", None)
        population.append(individual)
    return population

import random
def selectOne(population):
    max = sum([c.fitness for c in population])
    selection_probs = [c.fitness/max for c in population]
    return population[random.random.choice(len(population), p=selection_probs)]

def ga():

    best_individual = None

    best_solution = None
    best_score = None

    for iter in range(budget):
        populations = initialize_population()

        # evaluate all candidates in the population
        _ = [compute_objective(c) for c in populations]
        
        scores = [i.fitness for i in populations]
        if direction == "MIN":
            if best_score is None:
                best_score = min(scores)
                best_solution = populations[scores.index(best_score)]
            else:
                if best_score > min(scores):
                    best_score = min(scores)
                    best_solution = populations[scores.index(best_score)]
        else:
            if best_score is None:
                best_score = max(scores)
                best_solution = populations[scores.index(best_score)]
            else:
                
                if best_score < max(scores):
                    best_score = max(scores)
                    best_solution = populations[scores.index(best_score)]

        # select parents
        selected = selectOne(populations)
        # create the next generation
        
        children = list()
        for i in range(0, len(populations), 2):
            # get selected parents in pairs
            p1, p2 = selected[i], selected[i+1]
            # crossover and mutation
            if random.random() <= crossover_probability:
                offspring_1, offspring_2 = crossover_operator(p1, p2)
            else:
                offspring_1, offspring_2 = p1, p2

            for offspring in [offspring_1, offspring_2]:
                if random.random() <= mutation_probability:
                    mutation_operator(offspring)
                # store for next generation
                children.append(offspring)

        populations = children
    best_individual = best_solution
    return best_individual
