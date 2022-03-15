<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChiffoumiController extends AbstractController
{
    #[Route('/chiffoumi', name: 'chiffoumi')]
    public function index(): Response
    {
        return $this->render('chiffoumi/index.html.twig', [
            'controller_name' => 'ChiffoumiController',
        ]);
    }
}
