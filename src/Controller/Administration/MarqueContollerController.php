<?php

namespace App\Controller\Administration;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MarqueContollerController extends AbstractController
{
    #[Route('/marque/contoller', name: 'marque_contoller')]
    public function index(): Response
    {
        return $this->render('marque_contoller/index.html.twig', [
            'controller_name' => 'MarqueContollerController',
        ]);
    }
}
