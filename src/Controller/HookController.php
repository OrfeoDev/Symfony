<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HookController extends AbstractController
{
    #[Route('/hook', name: 'hook')]
    public function index(): Response
    {
        return $this->render('hook/index.html.twig', [
            'controller_name' => 'HookController',
        ]);
    }

    #[Route('/calcul', name: 'calcul')]
    public function cacul(): Response
    {
        return $this->render('calcul/index.html.twig', [
            'controller_name' => 'CalculController',
        ]);
    }
    #[Route('/eval', name: 'eval')]
    public function eval(): Response
    {
        return $this->render('eval/index.html.twig', [
            'controller_name' => 'EvalController',
        ]);
    }

}
